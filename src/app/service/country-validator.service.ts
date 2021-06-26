import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {ValidationByCountry} from "../models/ValidationByCountry";
import {Geo} from "../models/Geo";


@Injectable({
  providedIn: 'root'
})
export class CountryValidatorService {
  private url:string = `https://raw.githubusercontent.com/GreenPassApp/shared-data/main/validation-by-country.json`;

  constructor(private http:HttpClient) { }

  public getValidationByCountry():Observable<ValidationByCountry>{
    return this.http.get<ValidationByCountry>(this.url);
  }
}
