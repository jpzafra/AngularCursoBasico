import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent  {



  // personajes: Personaje[] = [
  //   {
  //     nombre: 'Goku',
  //     poder:15000
  //   },
  //   {
  //     nombre:'Veggeta',
  //     poder: 7500
  //   },
  //   {
  //     nombre:'Krilin',
  //     poder: 3500
  //   }
  // ];

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  nuevo: Personaje = {
      nombre: 'Maestro Roshi',
      poder: 1000
  }


  // cambiarNombre( event:any){
  //   console.log(event.target.value);
  // }

  // agregarNuevoPersonaje( event: Personaje ){
  //   console.log('Agregar nuevo personajeAAAAA', event);
  //   this.personajes.push(event);
  // }

  // constructor( private dbzService: DbzService ){
  //   //this.personajes = dbzService.personajes;
  // }


}