import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ MoviesService } from '../movies.service'
@Component({
  selector: 'app-detils',
  templateUrl: './detils.component.html',
  styleUrls: ['./detils.component.css']
})
export class DetilsComponent implements OnInit {
myParams:number;
movDetails:any;
  constructor( private route : ActivatedRoute , public _MoviesService:MoviesService ) { }

  ngOnInit() {
this.route.params.subscribe((params)=>this.myParams=params['id']);
this._MoviesService.getMovies(1).subscribe(move =>{this.movDetails = move.results[this.myParams]  }) 
  }

}
