import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  MovieData:any = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(){
    this.movieService.GetMovieData().subscribe(
      (data)=>{this.MovieData=data.Search;
        console.log(this.MovieData);
      }
      );
  }
}
