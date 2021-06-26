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
  validationState: string = "";

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
      })
    })
  }

  private getNewestRegulation() {
    this.countryValidatorService.getValidationByCountry().subscribe(validationsByCountry => {
      // @ts-ignore
      let regulations = validationsByCountry[this.countryCode]

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
    console.log(newestRegulation)
    if (this.user?.recovered && new Date(this.user.recovered.validUntil) < new Date()) {
      this.validationState = "valid"
    }
    if (this.user?.tested) {
      this.validationState = "valid";
    } else if (!this.user?.tested) {
      this.validationState = "invalid";
    } else {
      this.validationState = "default";
    }

    //TODO

  }


}
