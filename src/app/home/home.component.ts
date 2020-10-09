import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
currentPageNumper:number=1;




pages:number[]=[1,2,3,4,5,6,7,8]

movContainer:any[];

imgPrefix:string='https://image.tmdb.org/t/p/w500';


  constructor(public _MoviesService:MoviesService) {
    
    _MoviesService.getMovies(this.currentPageNumper).subscribe( move =>{
     this. movContainer =move.results;
    })
    
   }
   changePageNumper(num){ 
    this.currentPageNumper=num;
   this._MoviesService.getMovies(this.currentPageNumper).subscribe( move =>{
      this.movContainer =move.results;
     })
  }
  ngOnInit() {
  }

}
