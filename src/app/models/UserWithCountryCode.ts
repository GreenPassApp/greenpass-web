import {User} from "./User";

export class UserWithCountryCode{
  user: User
  requestCountryCode: string


  constructor(user: User, requestCountryCode: string) {
    this.user = user;
    this.requestCountryCode = requestCountryCode;
  }
}
