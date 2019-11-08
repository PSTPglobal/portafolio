import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
// tslint:disable-next-line: import-blacklist
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '60df02dea3a76e633011cc627152aa5c';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  // tslint:disable-next-line: deprecation
  constructor( private jsonp: Jsonp, private http: Http) { }
  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setTime( hasta.getDate() + 7 );

    let desdeStr =  `${ desde.getFullYear() }-${ desde.getMonth() }-${ desde.getDate() }`;
    let hastaStr =  `${ hasta.getFullYear() }-${ hasta.getMonth() }-${ hasta.getDate() }`;

    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }
    &api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).map( res => res.json());
  }
  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).map( res => res.json().results);
      // .map( res => resp.json() );
  }
  getPopularesKids() {
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc
    &api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).map( res => res.json().results);
  }
  getMejorPeliculaDelAno() {
    const ano = new Date();
    const anoStr = ano.getFullYear();
    const url = `${this.urlMoviedb}/discover/movie?primary_release_year=${anoStr}&sort_by=vote_average.desc
    &api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).map( res => res.json().results);
  }
}
