import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = [ 'Spiderman', 'Iron Man', 'Thor', 'Hulk' ];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    console.log('Borrando');
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('Heroe borrado', this.heroeBorrado);
  }

}
