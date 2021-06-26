import {Duration} from "moment";
import {User} from "./User";

export class Regulation {
  validFrom: Date
  rapidTestDuration: Duration;
  PCRTestDuration: Duration;
  validFromPartialVac: Duration;
  validUntilPartialVac: Duration;
  validUntilFullVac: Duration;
  validFromFullVac: Duration;


  constructor(validFrom: Date, rapidTestDuration: moment.Duration, PCRTestDuration: moment.Duration, validFromPartialVac: moment.Duration, validUntilPartialVac: moment.Duration, validUntilFullVac: moment.Duration, validFromFullVac: moment.Duration) {
    this.validFrom = validFrom;
    this.rapidTestDuration = rapidTestDuration;
    this.PCRTestDuration = PCRTestDuration;
    this.validFromPartialVac = validFromPartialVac;
    this.validUntilPartialVac = validUntilPartialVac;
    this.validUntilFullVac = validUntilFullVac;
    this.validFromFullVac = validFromFullVac;
  }
}
