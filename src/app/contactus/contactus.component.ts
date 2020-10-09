import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})



export class ContactusComponent implements OnInit {

contactUsForm = new FormGroup({

useName:new FormControl('',[Validators.required,Validators.minLength(8)]),
email : new FormControl('',[Validators.required,]),
subject : new FormControl('',[Validators.required,])

})


  constructor() { }

  ngOnInit() {
  }

}
