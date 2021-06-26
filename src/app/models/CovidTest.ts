export class CovidTest {
  id: string;
  type: string;
  dateOfSampling: Date;


  constructor(id: string, type: string, dateOfSampling: Date) {
    this.id = id;
    this.type = type;
    this.dateOfSampling = dateOfSampling;
  }
}
