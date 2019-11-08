import { Component } from '@angular/core';
import { PeliculasService } from './service/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*constructor( private _PS: PeliculasService) {
    this._PS.getPopulares()
    .subscribe( data => console.log( 'app component' + '' + data ));
  }*/
}
