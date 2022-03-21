import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @Output() changeModeEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeMode(e: any) {
    this.changeModeEvent.emit(e.target.value);
  }
}
