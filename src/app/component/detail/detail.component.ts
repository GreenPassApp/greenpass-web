import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/User";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public user: User | undefined

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(async (data) => {
      let link = data.get("link") || ""
      this.userService.getUser(link).subscribe(user => {
        this.user = user
      })
    })
  }

}
