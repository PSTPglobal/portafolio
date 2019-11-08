import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../service/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  peliculas: any;
  peliculasKids: any;
  peliculaAno: any;

  constructor( public _PS: PeliculasService) {
    this._PS.getPopulares().subscribe(data => {
      console.log(data);
      this.peliculas = data;
    });
    this._PS.getPopularesKids().subscribe(data => {
      console.log(data);
      this.peliculasKids = data;
    });
    this._PS.getMejorPeliculaDelAno().subscribe(data => {
      console.log(data);
      this.peliculaAno = data;
    });
   }

}
