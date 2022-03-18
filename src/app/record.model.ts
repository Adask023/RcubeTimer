export class Record {
  private msTotal: number;
  private fullTime: string;
  private date: Date;

  constructor(msTotal: number, fullTime: string, date: Date) {
    this.msTotal = msTotal;
    this.fullTime = fullTime;
    this.date = date;
  }
}
