import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  prefix="https://image.tmdb.org/t/p/w500/";

  movies:any[] = [];
  trendingTvs:any[] = [];
  persons:any[] = [];
  sub:any;

  constructor(private _movies:MoviesService) { 
    console.log("Home Constructor");
  }
 

  ngOnInit(): void {
    console.log("OnInit Home");
    this.sub = this._movies.movies("movies").subscribe((response)=> {
      this.movies = response.results.slice(0,10);
      //console.log(response.results);
    })

    this.sub = this._movies.movies("tv").subscribe((response)=> {
      this.trendingTvs = response.results.slice(0,10);
      //console.log(response.results);
    })

    this.sub = this._movies.movies("person").subscribe((response)=> {
      this.persons = response.results.slice(0,10);
      //console.log(response.results);
    })
  }

  ngOnDestroy(): void {
    console.log("Home Component Destroyed");
    this.sub.unsubscribe();
  }

}
