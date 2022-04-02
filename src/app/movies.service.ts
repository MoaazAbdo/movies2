import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  movies(type:string):Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
  }
   getMoviesDetails(id:string):Observable<any> {
     return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
   }

}
