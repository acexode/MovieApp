import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genre: Array<Object>;
  constructor(private route: ActivatedRoute, private _service: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
    const name = params['name'];
    this._service.genreId().subscribe((res) => {
     const list = [];
     list.push(...res.genres);
     const one = list.filter((data) => {
       if (data.name === name) {
        return data;
       }
     });
     const id = [];
     id.push(...one);
     const x = id[0].id;
     console.log(x)
      this._service.getGenres(x).subscribe(genre => this.genre = genre.results)
   });
  });
  }
}
