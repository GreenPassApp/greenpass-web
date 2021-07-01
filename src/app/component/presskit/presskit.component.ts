import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-presskit',
  templateUrl: './presskit.component.html'
})
export class PresskitComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  getCurLang(): String{
    return this.translate.currentLang
  }

}
