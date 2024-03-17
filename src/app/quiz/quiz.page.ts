import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage {
  respuestas: any = ['', '', '', '', '', '', '', '', '', ''];
  puntuacion: number = 0;
  preguntasCorrectas: number = 0;

  constructor() {}

  calcularPuntuacion() {
    this.puntuacion = 0;
    this.preguntasCorrectas = 0;

    if (this.respuestas[0] === 'B') {
      this.puntuacion += 10;
      this.preguntasCorrectas++;
    }

    if (this.respuestas[1] === 'C') {
      this.puntuacion += 10;
      this.preguntasCorrectas++;
    }

    if (this.respuestas[2] === 'B') {
      this.puntuacion += 10;
      this.preguntasCorrectas++;
    }

    if (this.respuestas[3] === 'A') {
      this.puntuacion += 10;
      this.preguntasCorrectas++;
    }

    if (this.respuestas[4] === 'B') {
      this.puntuacion += 10;
      this.preguntasCorrectas++;
    }

    if (this.respuestas[5] === 'A') {
      this.puntuacion += 10;
      this.preguntasCorrectas++;
    }

    if (this.respuestas[6] === 'C') {
      this.puntuacion += 10;
      this.preguntasCorrectas++;
    }

    if (this.respuestas[7] === 'A') {
      this.puntuacion += 10;
      this.preguntasCorrectas++;
    }

    if (this.respuestas[8] === 'B') {
      this.puntuacion += 10;
      this.preguntasCorrectas++;
    }

    if (this.respuestas[9] === 'C') {
      this.puntuacion += 10;
      this.preguntasCorrectas++;
    }

    let mensaje: string = '';

    if (this.puntuacion === 100) {
      mensaje = '¡Felicidades! Has acertado todas las preguntas, eres el Arconte primigenio';
    } else if (this.puntuacion >= 90 && this.puntuacion <= 70) {
      mensaje = '¡Felicidades! Has acertado la mayoría de las preguntas, todo un viajero experimentado';
    } else if (this.puntuacion >= 60 && this.puntuacion <= 40) {
      mensaje = 'Puede mejorar en los siguientes intentos, estas al nivel de un aventurero';
    } else if (this.puntuacion >= 10 && this.puntuacion <= 30) {
      mensaje = 'Tu viaje apenas comienza, puedes mejorar!';
    } else if (this.puntuacion === 0) {
      mensaje = 'No has acertado ninguna pregunta, ¡Sigue explorando!';
    }

    alert(`${mensaje} . Has acertado ${this.preguntasCorrectas} de 10 preguntas.`);
  }
}
