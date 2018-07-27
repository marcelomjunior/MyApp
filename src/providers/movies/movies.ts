import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {
  private apiPath = "https://api.themoviedb.org/3/";
  private apiKey = "ec528195899fda5dce3ca13f6095584e";

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider')
  }

  getLatestMovies() {
    return this.http.get(this.apiPath + "movie/popular?api_key=" + this.apiKey)
  }

}
