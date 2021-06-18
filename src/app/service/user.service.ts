import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string = `http://localhost:8081/api/user`;

  constructor(private http:HttpClient) { }

  public getUser(link: String):Observable<User>{
    return this.http.get<User>(`${this.url}/get/${link}`);
  }
}