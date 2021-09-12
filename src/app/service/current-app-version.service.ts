import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrentAppVersion} from "../models/CurrentAppVersion";

@Injectable({
  providedIn: 'root'
})
export class CurrentAppVersionService {

  constructor(private http:HttpClient) { }

  public getCurrentAppVersion():Observable<CurrentAppVersion>{
    return this.http.get<CurrentAppVersion>('https://raw.githubusercontent.com/GreenPassApp/shared-data/main/current-app-version.json');
  }
}
