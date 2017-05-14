import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  movie: Object;

  constructor(private route: ActivatedRoute, private _service: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this._service.getOne(id).subscribe(movie =>this.movie = movie);
    });
  }

}
