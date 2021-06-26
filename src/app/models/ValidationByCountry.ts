import {Regulation} from "./Regulation";

export class ValidationByCountry{
    AT: [Regulation];
    DE: [Regulation];


  constructor(AT: [Regulation], DE: [Regulation]) {
    this.AT = AT;
    this.DE = DE;
  }
}
