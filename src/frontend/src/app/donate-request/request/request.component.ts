import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  flipped: boolean
  money: string
  disabled: boolean
  backImagePath: string
  constructor() { }

  ngOnInit() {
    this.backImagePath = '/assets/dummy/trump-pencewin.png';
  }

  toggleView() {
    this.flipped = !this.flipped;
  }

  setMoney(value: string) {
    if (this.money === value) {
      this.money = null;
    } else {
      this.money = value;
    }
  }

  isMoney(value) {
    if (this.money === value) {
      return 'donate-clicked';
    } else {
      return false;
    }
  }

  setDisabled() {
    this.disabled = !this.disabled
  }

  isDisabled() {
    if (this.disabled) {
      return 'disabled_button';
    } else {
      return '';
    }
  }
}
