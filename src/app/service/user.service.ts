import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {map} from "rxjs/operators";
import {UserWithCountryCode} from "../models/UserWithCountryCode";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string = `http://localhost:8081/user`;

  constructor(private http:HttpClient) { }

  public getUser(link: String):Observable<UserWithCountryCode>{
    return this.http.get<UserWithCountryCode>(`${this.url}/get/${link}`);
  }
}
