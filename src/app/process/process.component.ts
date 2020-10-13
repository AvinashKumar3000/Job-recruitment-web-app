import { RecruitmentService } from './../service/recruitment.service';
import { Component, OnDestroy, OnInit } from '@angular/core';


interface JsonClass{
  type:number,
  type_name:string,
  title:string,
  desc:string,
  link:string,
  date:string,
  time:string
}

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit,OnDestroy {

  constructor(private _rec:RecruitmentService) { }
  ngOnDestroy():void {
    this._rec.process = this.items;
  }
  ngOnInit(): void {
    this._rec.process = []
    this._rec.getProcess()
    this.items = this._rec.process
  }
  inputObj:JsonClass = null;
  items:Array<JsonClass> = [];
  types:Array<JsonClass> = [{
    type:1,
    type_name:"pre-placement talk",
    title:"pre placement topic",
    desc:"description",
    link:"link",
    date:"00/00/0000",
    time:"00:00 AM"
  },{
    type:2,
    type_name:"Online test",
    title:"online test",
    desc:"description",
    link:"link",
    date:"00/00/0000",
    time:"00:00 AM"
  },{
    type:3,
    type_name:"group discussion",
    title:"group discussion topic",
    desc:"description",
    link:"link",
    date:"00/00/0000",
    time:"00:00 AM"
  },
  {
    type:4,
    type_name:"interview",
    title:"interview topic",
    desc:"description",
    link:"link",
    date:"00/00/0000",
    time:"00:00 AM"
  }
  ]
  

  addItem(qnType:number){
    var obj = this.types[qnType-1]
    this.items.push(obj)
    this._rec.process = this.items;   
  }

  delItem(index:number){
    var newItemList = [];
    for (let i = 0; i < this.items.length; i++) {
      if (i != index)
         newItemList.push(this.items[i]);
    }
    this.inputObj = null;
  
    this.items = newItemList;
    this._rec.process = this.items;
  }

 setInputObj(id:number){
   this.inputObj = this.items[id]
   this._rec.process = this.items;
 }

 
}
