import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],

})
export class MovieComponent implements OnInit {
  lists: Array<Object>;

  constructor(private service: MovieService) {}

  ngOnInit() {
    this.service.getPopular().subscribe(res => this.lists = res.results)
  }

}
