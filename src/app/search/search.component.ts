import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movie: String;
  Results: Array<Object>;

  constructor(private service: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.params.subscribe((params) => {
      const param = params['name']
      this.service.search(param).subscribe(res => this.Results = res.results);
 
   })
    
  }

}
