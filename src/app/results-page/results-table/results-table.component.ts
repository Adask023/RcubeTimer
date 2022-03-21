import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Record } from 'src/app/record.model';
import { RecordsService } from 'src/app/records.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css'],
})
export class ResultsTableComponent implements OnInit {
  @Input() mode: string = '';

  public recordsToShow: Record[] = [];

  constructor(private recordsService: RecordsService) {}

  ngOnInit(): void {}

  getRecordsToshow() {
    this.recordsToShow = this.recordsService
      .getSortedRecords()
      .slice(0, +this.mode);
  }

  ngOnChanges(mode: SimpleChanges): void {
    this.getRecordsToshow();
  }
}
