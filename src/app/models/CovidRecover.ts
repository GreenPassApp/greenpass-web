export class CovidRecover {
  id: string;
  validUntil: Date;


  constructor(id: string, validUntil: Date) {
    this.id = id;
    this.validUntil = validUntil;
  }
}
