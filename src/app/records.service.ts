import { Record } from './record.model';

export class RecordsService {
  private records = [
    new Record(1111, 'test', new Date()),
    new Record(2222, 'test', new Date()),
    new Record(3333, 'test', new Date()),
  ];

  getRecords() {
    return this.records.slice();
  }

  addRecord(newRecord: Record) {
    this.records.push(newRecord);
    console.log(this.records);
  }
}
