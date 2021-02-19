import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1>Hola Mundo</h1>
        {{ title }}
        {{ numero }}
        <p>La base es: {{ base }} </p>
        <button (click)="acumular( base )"> {{ base }} </button>
        <button (click)="acumular( -base )"> -{{ base }}  </button>

    `
})

export class ContadorComponent {

    title: string = 'Contador app';

    numero: number = 0;

    base: number = 5;

    // sumar(){
    //   this.numero += 1;
    // }

    // restar(){
    //   this.numero -= 1;
    // }

    acumular(valor:number ): number {
      return this.numero += valor;
    }
}