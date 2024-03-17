import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage {
  cantidad: number = 0;
  monedaDestino: string = '';
  resultado: number = NaN;

  convertir() {
    if (this.cantidad && this.monedaDestino) {
      switch (this.monedaDestino) {
        case 'INR':
          this.resultado = this.cantidad * 82.89; //Rupia
          break;
        case 'CNY':
          this.resultado = this.cantidad * 7.20; //Yuan
          break;
        case 'EUR':
          this.resultado = this.cantidad * 0.92; //Euro
          break;
        case 'MXN':
          this.resultado = this.cantidad * 16.72; //Peso
          break;
        default:
          this.resultado = NaN;
          break;
      }
    } else {
      this.resultado = NaN;
    }
  }
}
