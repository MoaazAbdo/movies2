import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  id:string = '';
  Details:any = {};
  gensers:any[] =[];
  prefix="https://image.tmdb.org/t/p/w500/";
  constructor(private _ActivatedRoute:ActivatedRoute, private _movie:MoviesService) {
    this.id = _ActivatedRoute.snapshot.params['id'];
    _movie.getMoviesDetails(this.id).subscribe((data) => {
      this.Details = data;
      this.gensers = data.genres;
      //console.log(this.gensers);
    });
   }

  ngOnInit(): void {
  }

}
