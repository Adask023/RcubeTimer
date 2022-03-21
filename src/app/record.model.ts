export class Record {
  public msTotal: number;
  public fullTime: string;
  public date: Date;

  constructor(msTotal: number, fullTime: string, date: Date) {
    this.msTotal = msTotal;
    this.fullTime = fullTime;
    this.date = date;
  }
}
