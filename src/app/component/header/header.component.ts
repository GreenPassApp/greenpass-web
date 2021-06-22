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
  }

  getCurLang(): String{
    return this.translate.currentLang
  }

  closeMobileMenu() : void{
    let button = document.querySelector("#mobile-nav-toggle");
    // @ts-ignore
    button.checked = false;

    let mobileMenu = document.querySelector("#mobile-nav");
    // @ts-ignore
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
