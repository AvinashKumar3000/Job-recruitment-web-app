
import { QuestionService } from './../service/question.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-test-questions',
  templateUrl: './create-test-questions.component.html',
  styleUrls: ['./create-test-questions.component.css']
})

export class CreateTestQuestionsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _rt:Router,private _qn:QuestionService) { }
  id:string = "";
  inputvar:string = "";

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    
  }

  
  nav = {
    n0:false,
    n1:false,
    n2:false,
    n3:false
  }
  showNotification:boolean = false;
  showInput:boolean = false;
  inputField:string = ""
  notification:string  = "hai this is a meesage"
  btnText:string = "ok"
  fn:string = "none"

  items = [];
  types = [{
    type:1,
    qn:"your question type 1",
    opt:{
      opt1:"option 1",
      opt2:"option 2",
      opt3:"option 3",
      opt4:"option 4"
    }
  },{
    type:2,
    qn:"your question type 2",
  },{
    type:3,
    qn:"your question type 3",
    opt:{
      opt1:"option 1",
      opt2:"option 2",
      opt3:"option 3",
      opt4:"option 4"
    }
  }]
  titleText = 'your title';

  

  onKey(value: string) {
    this.titleText = value ;
  }

  onKeyQn(value:string,mainId:number){
     this.items[mainId].qn = value;
  }

  addQn(qnType:number){
    this.items.push(this.types[qnType-1])
  }
  
  editOpt(value:string,mainId:number,id:number){
    var obj = this.items[mainId].opt;
    if(id == 0)
      obj.opt1 = value
    if(id == 1)
      obj.opt2 = value
    if(id == 2)
      obj.opt3 = value
    if(id == 3)
      obj.opt4 = value
  }



  delQn(index:number){
    var newItemList = [];
    for (let i = 0; i < this.items.length; i++) {
      if (i != index)
         newItemList.push(this.items[i]);
    }
    this.items = newItemList;
  }

  about(){
    this.open('your content will be edited over the text area on the page itself',false,'document id','ok','ok')
  }

  reset(mainId:number){
    console.log("hgai")
    var obj = this.items[mainId];
    obj.qn = ""
    if ( obj.type != 2 ){
      obj.opt = {
        opt1:"option 1",
      opt2:"option 2",
      opt3:"option 3",
      opt4:"option 4"
      }
    }
  }

  async submit(){
    var obj = {
      id:this.id,
      title:this.titleText,
      qn:this.items
    }
    var res = await this._qn.saveData(obj)
    this.open('Docment saved successfully',false,'document id','ok','ok')
    
  }
  async openExist(){
    var res:any = await this._qn.isIdExist(this.inputvar)
    console.log(res)
    if (res)
    {
      // then exist
      res = await this._qn.getData(this.inputvar)
      console.log(res)
      this.items = res.qn
      this.titleText = res.title
      this.id = res.id
      this.close()
    }else{
      this.notification = "document with such id not found."
    }
    
  }
  showId(){
    this.open(`your Id is : ${this.id}`,false,'document id','ok','none')
  }
  async showDoc(){
    var msg = ""
    var res:any = await this._qn.getAll()
    if (res.length != 0 ){
      for ( let i = 0 ; i < res.length ; i++){
        msg = msg + res[i].id + " | "
      }
    }else{
      msg = "no Document found"
    }
    
    this.open(msg,false,'document id','ok','ok')
  }

  
  navShow(id:number){
    if (id == 0){
      this.nav.n0 = !this.nav.n0
      this.nav.n1 = false
      this.nav.n2 = false
      this.nav.n3 = false
    }else if (id == 1){
      this.nav.n1 = !this.nav.n1
      this.nav.n0 = false
      this.nav.n2 = false
      this.nav.n3 = false
    }else if (id == 2){
      this.nav.n2 = !this.nav.n2
      this.nav.n1 = false
      this.nav.n0 = false
      this.nav.n3 = false
    }else if (id == 3){
      this.nav.n3 = !this.nav.n3
      this.nav.n1 = false
      this.nav.n2 = false
      this.nav.n0 = false
    }
  
  }
  hideNav(){
    this.nav.n0 = false
    this.nav.n1 = false
    this.nav.n2 = false
    this.nav.n3 = false
  }
  close(){
    this.showNotification = false;
  }
  open(msg:string="nothing",input:boolean = false,inputField:string="",btnText:string="ok",fn:string="none"){
    this.showInput = false
    if(input){
      this.showInput = true
      this.inputField = inputField
    }
    if(fn != "none"){
      this.fn = fn
    }
    this.btnText = btnText
    this.notification = msg
    this.showNotification = true
  }
  async new(){
    var res:any = await this._qn.isIdExist(this.inputvar)
    if (res)
      this.notification = "doc id already existed."
    else
    { this.titleText = "your title"
      this.items = []
      this._rt.navigate(['create-test-questions/'+this.inputvar])
      this.close()
    }
    
  }
  async editId(){
    var res:any = this._qn.isIdExist(this.id)
    var inres:any = this._qn.isIdExist(this.inputvar)
    if(!inres){
      this.notification = "the id entered already present"
    }
    else if(res){
      this._qn.editId(this.id,this.inputvar)
      this.notification = "your id is updated successfully"
      this.id = this.inputvar
  
    }else{
      this.notification = "you have not saved your new document"
    }
    
  }
  submitNotification(){
    if(this.fn == "ok"){
      this.close()
    }
    else if(this.fn == "save"){
      this.submit();
    }else if(this.fn == "new"){
      if( this.inputvar == ""){
        this.notification = "input value cannot be empty"
      }else if( this.inputvar.indexOf(' ') >= 0){
        this.notification = "input field cannot be empty or it may be invalid, enter input"
      }
      else
        this.new()
        
    }else if(this.fn == "open"){
      if( this.inputvar == ""){
        this.notification = "input value cannot be empty"
      }else if( this.inputvar.indexOf(' ') >= 0){
        this.notification = "invalid id, enter id"
      }else{
        this.openExist()
      }
    }else if(this.fn == "exit"){
      this._rt.navigate(['../'])
      this.close()
    }else if(this.fn == "edit"){
      if( this.inputvar == ""){
        this.notification = "input value cannot be empty"
      }else if( this.inputvar.indexOf(' ') >= 0){
        this.notification = "invalid id, enter id"
      }else{
        this.editId()
      }
    }
    
  }
}
