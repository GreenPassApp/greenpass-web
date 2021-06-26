export class CovidVaccinate {
  id: string;
  highestCurrDose: number;
  dosesNeeded: number;
  dateOfLastVaccinate: Date;
  dateOfFirst: Date;


  constructor(id: string, highestCurrDose: number, dosesNeeded: number, dateOfLastVaccinate: Date, dateOfFirst: Date) {
    this.id = id;
    this.highestCurrDose = highestCurrDose;
    this.dosesNeeded = dosesNeeded;
    this.dateOfLastVaccinate = dateOfLastVaccinate;
    this.dateOfFirst = dateOfFirst;
  }
}
