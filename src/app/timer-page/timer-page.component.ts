import { Component, OnInit } from '@angular/core';
import { Record } from '../record.model';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.css'],
})
export class TimerPageComponent implements OnInit {
  constructor(private recordsService: RecordsService) {}

  ngOnInit(): void {}

  public name = '';

  msTotal: number = 0;
  ms: any = '0' + 0;
  sec: any = '0' + 0;
  min: any = '0' + 0;
  hr: any = '0' + 0;

  startTimer: any;
  running: boolean = false;

  start(): void {
    if (!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {
        this.ms++;
        this.msTotal++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;

        if (this.ms === 100) {
          this.sec++;
          this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
          this.ms = '0' + 0;
        }

        if (this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }

        if (this.hr === 60) {
          this.hr++;
          this.hr = this.hr < 10 ? '0' + this.hr : this.hr;
          this.min = '0' + 0;
        }
      }, 10);
    } else {
      this.stop();
    }
  }
  stop(): void {
    clearInterval(this.startTimer);
    this.running = false;
    this.saveData();
    this.reset();
  }

  reset(): void {
    clearInterval(this.startTimer);
    this.running = false;
    this.hr = this.min = this.sec = this.ms = '0' + 0;
    this.msTotal = 0;
  }

  saveData(): void {
    let fullTime = `${this.hr != 0 ? this.hr + ':' : ''} ${
      this.min != 0 ? this.min + ':' : ''
    }  ${this.sec}.${this.ms}`;

    this.recordsService.addRecord(
      new Record(this.name, this.msTotal, fullTime, new Date().toDateString())
    );
  }
}
