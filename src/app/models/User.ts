import {CovidTest} from "./CovidTest";
import {CovidVaccinate} from "./CovidVaccinate";
import {CovidRecover} from "./CovidRecover";


export class User{
  link: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  vaccinated: CovidVaccinate;
  tested: CovidTest;
  recovered: CovidRecover;


  constructor(link: string, firstName: string, lastName: string, birthday: Date, vaccinated: CovidVaccinate, tested: CovidTest, recovered: CovidRecover) {
    this.link = link;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.vaccinated = vaccinated;
    this.tested = tested;
    this.recovered = recovered;
  }
}
