import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User";
import {TranslateService} from "@ngx-translate/core";
import {CountryValidatorService} from "../../service/country-validator.service";
import * as moment from 'moment';
import {Regulation} from "../../models/Regulation";
import {UserWithCountryCode} from "../../models/UserWithCountryCode";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  public user: User | undefined
  public countryCode: string | undefined
  notFound: boolean = false;
  validationState: string = "";
  daysBetween: any | undefined;


  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    public countryValidatorService: CountryValidatorService
  ) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(async (data) => {
      let link = data.get("link") || ""
      this.userService.getUser(link).subscribe(userWithCountryCode => {
        this.user = userWithCountryCode.user
        this.countryCode = userWithCountryCode.requestCountryCode
        this.getNewestRegulation()

        if (this.user?.vaccinated) {
          this.daysBetween = Math.floor(
            (new Date().getTime() - new Date(this.user?.vaccinated?.dateOfLastVaccinate).getTime())
            / (1000 * 3600 * 24)
          );
        } else if (this.user?.tested) {
          this.daysBetween = Math.floor(
            (new Date().getTime() - new Date(this.user?.tested?.dateOfSampling).getTime())
            / (1000 * 3600 * 24)
          );
        } else if (this.user?.recovered) {
          this.daysBetween = Math.floor(
            (new Date().getTime() - new Date(this.user?.recovered?.validUntil).getTime())
            / (1000 * 3600 * 24)
          );
        }
      }, (error) => {
        setTimeout(() => {
          this.notFound = true;
        }, 1000);
      })
    })


  }

  private getNewestRegulation() {
    this.countryValidatorService.getValidationByCountry().subscribe(validationsByCountry => {
      // @ts-ignore
      let regulations = validationsByCountry[this.countryCode]

      if (regulations == null) {
        this.validationState = "default";
        return
      }

      let currentDate = new Date();
      let newestRegulation: Regulation = regulations[0];

      for (let regulation of regulations) {
        let curRegulation = new Date(regulation.validFrom);
        if (curRegulation <= currentDate) { //do not check regulations in the future
          if (curRegulation > newestRegulation.validFrom) {
            newestRegulation = regulation; //save newest regulation that is not in the future
          }
        }
      }
      this.validate(newestRegulation)
    })
  }

  private validate(newestRegulation: Regulation) {
    if (this.user?.recovered) {
      if (new Date(this.user.recovered.validUntil) > new Date()) {
        this.validationState = "invalid"
        return
      }
    } else if (this.user?.tested) {
      let durationPCR
      if (this.user.tested.type == "pcr") {
        durationPCR = moment.duration(newestRegulation.PCRTestDuration)
      } else {
        durationPCR = moment.duration(newestRegulation.rapidTestDuration)
      }
      if (moment(this.user?.tested.dateOfSampling).isBefore(moment(Date()).subtract(durationPCR))) {
        this.validationState = "invalid"
        return
      }
    } else if (this.user?.vaccinated) {
      if (this.user.vaccinated.dosesNeeded == this.user.vaccinated.highestCurrDose) {
        if (newestRegulation.validFromFullVac && moment(this.user.vaccinated.dateOfLastVaccinate).isAfter(moment(Date()).subtract(newestRegulation.validFromFullVac))) {
          this.validationState = "invalid"
          return
        }
        if (newestRegulation.validUntilFullVac && moment(this.user.vaccinated.dateOfLastVaccinate).isBefore(moment(Date()).subtract(newestRegulation.validUntilFullVac))) {
          this.validationState = "invalid"
          return
        }
      } else {
        if (newestRegulation.validFromPartialVac && moment(this.user.vaccinated.dateOfFirst).isAfter(moment(Date()).subtract(newestRegulation.validFromPartialVac))) {
          this.validationState = "invalid"
          return
        }
        if (newestRegulation.validUntilPartialVac && moment(this.user.vaccinated.dateOfFirst).isBefore(moment(Date()).subtract(newestRegulation.validUntilPartialVac))) {
          this.validationState = "invalid"
          return
        }
        if (!newestRegulation.validFromPartialVac && !newestRegulation.validUntilPartialVac) {
          this.validationState = "invalid"
          return
        }
      }
    }
    this.validationState = "valid"
  }
}
