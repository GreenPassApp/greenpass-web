import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html'
})
export class PrivacyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faqOpenClose(event: any) {
    let header = event.target;
    let content = event.target.nextElementSibling;

    header.classList.toggle("isClosed");
    content.classList.toggle("isClosed");
  }

}
