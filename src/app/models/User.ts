import {CovidTest} from "./CovidTest";
import {CovidVaccinate} from "./CovidVaccinate";
import {CovidRecover} from "./CovidRecover";


export class User{
  link: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  birthday: Date | undefined;
  vaccinated: CovidVaccinate | undefined;
  tested: CovidTest | undefined;
  recovered: CovidRecover | undefined;
}
