import { Component, OnInit } from '@angular/core';
import {CurrentAppVersionService} from "../../service/current-app-version.service";
import {CurrentAppVersion} from "../../models/CurrentAppVersion";

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html'
})
export class DownloadComponent implements OnInit {
  public appVersion: CurrentAppVersion | undefined

  constructor(private currentAppVersionService: CurrentAppVersionService) { }

  ngOnInit(): void {
    this.currentAppVersionService.getCurrentAppVersion().subscribe(value => {
      this.appVersion = value
    })
  }

}
