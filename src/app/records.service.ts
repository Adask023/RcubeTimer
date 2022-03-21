import { Record } from './record.model';

export class RecordsService {
  private records: Record[] = [];

  getRecords() {
    return this.records.slice();
  }

  getSortedRecords() {
    let sorted = this.records.sort(function (a, b) {
      return a.msTotal - b.msTotal;
    });

    return sorted.slice();
  }

  addRecord(newRecord: Record) {
    this.records.push(newRecord);
    console.log(this.records);
  }
}
