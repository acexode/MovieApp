import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

})
export class CarouselComponent implements OnInit {
  lists: Array<Object>
  constructor(private service: MovieService) {
    this.service.getInTheater().subscribe(data => this.lists = data.results)
   }

  ngOnInit() {
  } 

//  https://thecodegarden.net/angular-2-carousel-component/
  isActive(item: String){
    return item === this.lists[0];
  }
}
