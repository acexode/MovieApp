import { Component, OnInit, HostListener } from '@angular/core';
import { MovieService } from './service/movie.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]
})

export class AppComponent implements OnInit {
  title = 'Hello World';
  movie: String;
  Results: Array<Object>;
  genre: String;
  genreResults;
  constructor(private service: MovieService) {}

  ngOnInit() {
    this.service.genreId().subscribe((res) => {
      const arr = [];
     arr.push(res)
     this.genreResults = arr[0].genres
     //console.log(this.genreResults)
    })
  }
  search() {
    this.service.search(this.movie).subscribe(res => this.Results = res.results);
  }

  getGenre(genre: any) {
   const title = genre.innerText;

   console.log(title);
   /* this.service.genreId().subscribe((res) => {
     const list = [];
     list.push(...res.genres);
     const one = list.filter((data) => {
       if (data.name === title) {
        return data;
       }
     });
     const id = [];
     id.push(...one);
     const x = id[0].id;
     console.log(x)
      this.service.getGenres(x).subscribe(res => console.log(res.results))
   });*/
  }



}
