import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
  }

  ngOnInit(): void {
  }

  setLang(lang: string){
    this.translate.use(lang);

    let langNavToggles : any = document.querySelectorAll(".langnavToggle-js");
    console.log(langNavToggles);
    for(let toggle of langNavToggles) {
      toggle.classList.remove("isOpen");
    }
    let langNavs : any = document.querySelectorAll(".langnav-js");
    for(let nav of langNavs) {
      nav.classList.add("isClosed");
    }
  }

  getCurLang(): String{
    return this.translate.currentLang
  }

  closeMobileMenu() : void{
    let button : any = document.querySelector("#mobile-nav-toggle");
    button.checked = false;

    let mobileMenu : any = document.querySelector("#mobile-nav");
    mobileMenu.classList.add("d-none");
  }

  toggleMobileMenu(event: any) {
    let toggleBtn = event.target;
    let mobileMenu = document.querySelector("#mobile-nav");

    if (mobileMenu) {
      if (toggleBtn.checked) {
        mobileMenu.classList.remove("d-none");
      } else {
        mobileMenu.classList.add("d-none");
      }
    }
  }

  toggleLangMenu(event: any) {
    let button = event.target;
    let menu = event.target.nextElementSibling;

    button.classList.toggle('isOpen');
    menu.classList.toggle('isClosed');

  }

}
