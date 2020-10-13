import {  ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentui',
  templateUrl: './studentui.component.html',
  styleUrls: ['./studentui.component.css'],
})
export class StudentuiComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  username:string;
  ngOnInit(): void {
   this.username = this.route.snapshot.paramMap.get('id');
  }
  items = {
    1:"option",
    2:"avasd"
  }
  addTag(){
    
  }
  display(){
    console.log(this.items)
  }
}
