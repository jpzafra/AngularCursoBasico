import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ContadorComponent } from './contador/contador/contador.component';
//import { HeroeComponent } from './heroes/heroe/heroe.component';
import { AppComponent } from './app.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent
    //ContadorComponent
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule, HeroesModule, ContadorModule, DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
