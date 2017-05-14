import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  apiKey: String;
  url = 'https://api.themoviedb.org/3'
  constructor(private jsonp: Jsonp) {
    this.apiKey = '&api_key=71e4a6616a9b5c830392b8933d68ce6e';
    console.log('service injected')
  }
  getPopular() {
    const url = `${this.url}/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc${this.apiKey}`;
    return this.jsonp.get(url).map(res => res.json());
  }
  getInTheater() {
    // tslint:disable-next-line:max-line-length
    const url = `${this.url}/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-03-15&primary_release_date.lte=2017-05-22${this.apiKey}`;
    return this.jsonp.get(url).map(res => res.json());
  }

  search(movie) {
     // tslint:disable-next-line:max-line-length
      const url = `${this.url}/search/movie?callback=JSONP_CALLBACK&query=${movie}&sort_by=popularity.desc${this.apiKey}`;
      return this.jsonp.get(url).map(res => res.json());
  }
  getOne(id) {
      const url = `${this.url}/movie/${id}?callback=JSONP_CALLBACK${this.apiKey}`;
    return this.jsonp.get(url).map(res => res.json());
  }

  genreId() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK${this.apiKey}&language=en-US`
    return this.jsonp.get(url).map(res => res.json())
 }

 getGenres(id: number) {
   // tslint:disable-next-line:max-line-length
   const url = `https://api.themoviedb.org/3/genre/${id}/movies?callback=JSONP_CALLBACK&api_key=71e4a6616a9b5c830392b8933d68ce6e&language=en-US&include_adult=false&sort_by=created_at.asc`;
   return this.jsonp.get(url).map(res => res.json());
}

}
