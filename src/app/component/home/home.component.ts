import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  faqOpenClose(event: any) {
    let header = event.target;
    let content = event.target.nextElementSibling;

    header.classList.toggle("isClosed");
    content.classList.toggle("isClosed");
  }

}
