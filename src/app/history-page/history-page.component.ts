import { Component, OnInit } from '@angular/core';
import { Record } from '../record.model';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent implements OnInit {
  historyList: Record[];

  constructor(private recordsService: RecordsService) {}

  ngOnInit(): void {
    this.historyList = this.recordsService.getRecords();
  }
}
