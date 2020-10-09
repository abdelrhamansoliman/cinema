import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, observable } from 'rxjs/';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( public _HttpClient:HttpClient) { }
   getMovies(pageNumper):Observable<any>{
     return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=f751b1a4980a3cea5237cf897edefdc6&page="+pageNumper)
   }
}
