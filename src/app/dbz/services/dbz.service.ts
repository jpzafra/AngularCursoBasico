import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder:15000
        },
        {
          nombre:'Veggeta',
          poder: 7500
        },
        {
          nombre:'Krilin',
          poder: 3500
        }
    ];

    get personajes(): Personaje[] {
        return [ ...this._personajes ];
    }

    constructor(){}

    agregarPersonaje( personaje: Personaje ): void {
        this._personajes.push( personaje );
    }


}