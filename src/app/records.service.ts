import { Record } from './record.model';

export class RecordsService {
  private records: Record[] = [];

  constructor() {
    if (localStorage.getItem('Records')) {
      try {
        this.records = JSON.parse(localStorage.getItem('Records') || '');
      } catch (e) {
        alert(`Cant set items from local storage, error ${e}`);
      }
    }
  }

  setRecords(recordsToSet: Record[]) {
    this.records = recordsToSet;
  }

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

    localStorage.setItem('Records', JSON.stringify(this.records));
  }
}
