import { Component, OnInit, HostListener } from '@angular/core';
import { MovieService } from './service/movie.service';
import { Router } from '@angular/router';
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
  constructor(private service: MovieService, private router: Router) {}

  ngOnInit() {
    this.service.genreId().subscribe((res) => {
      const arr = [];
     arr.push(res)
     this.genreResults = arr[0].genres;
   });
  }
  search() {
    this.router.navigate(['/search', this.movie]);
    console.log(this.movie);
  }
}
