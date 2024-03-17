import { Component } from '@angular/core';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.page.html',
  styleUrls: ['./calcu.page.scss'],
})
export class CalcuPage {
  display: string = '';
  buttons: string[] = ['1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '-', '0', '.', '+'];

  addToDisplay(value: string) {
    this.display += value;
  }

  clearDisplay() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Tas menso eso no se puede';
    }
  }

  removeLastDigit() {
    this.display = this.display.slice(0, -1);
  }
}
