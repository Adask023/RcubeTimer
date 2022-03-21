export class Record {
  public name: string;
  public msTotal: number;
  public fullTime: string;
  public date: any;

  constructor(name: string, msTotal: number, fullTime: string, date: any) {
    this.name = name;
    this.msTotal = msTotal;
    this.fullTime = fullTime;
    this.date = date;
  }
}
