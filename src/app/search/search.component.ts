import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movie: String;
  Results: Array<Object>;

  constructor(private service: MovieService) { }

  ngOnInit() {
   
    this.service.search(this.movie).subscribe(res => this.Results = res.results);
 
  }

}
