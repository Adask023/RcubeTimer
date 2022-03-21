import { Component, OnInit } from '@angular/core';
import { Record } from '../record.model';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css'],
})
export class ResultsPageComponent implements OnInit {
  sortedHistoryList: Record[] = [];

  public selectMode = '3';

  constructor(private recordsService: RecordsService) {}

  ngOnInit(): void {
    this.sortedHistoryList = this.recordsService.getSortedRecords();
  }

  changeMode(e: string) {
    console.log(`event ${e}`);
    this.selectMode = e;
  }
}
