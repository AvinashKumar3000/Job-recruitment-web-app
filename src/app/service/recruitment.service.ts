import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

interface Response{
  log:string,
  status:boolean
}
interface ArrayType{
  type:number,
  type_name:string,
  title:string,
  desc:string,
  link:string,
  date:string,
  time:string
}
interface ObjectType{
    company:string,
    website:string,
    about:string,
    jobRole:string,
    CTC:{
      lpa:string,
      line1:string,
      line2:string
    },
    eligibility:string,
    branches:string
  
}
@Injectable({
  providedIn: 'root'
})
export class RecruitmentService  {

  desc:ObjectType = {
    company:"",
    website:"",
    about:"",
    jobRole:"",
    CTC:{
      lpa:"",
      line1:"",
      line2:""
    },
    eligibility:"",
    branches:""
  };
  url = "http://localhost:9000/"

  process:Array<ArrayType> = [];
  constructor(private http:HttpClient,private _auth:AuthService) { 
  }

  
  async saveDesc(){
    var resObject = await this.http.post<Response>(this.url+'desc/saveData',{username:this._auth.username,data:this.desc}).toPromise()
    return resObject;
  }
  async getDesc(){
    var resObject = await this.http.post<ObjectType>(this.url+'desc/getData',{username:this._auth.username}).toPromise()    
    // process to set the value
    this.desc.CTC.line1 = resObject.CTC.line1
    this.desc.CTC.line2 = resObject.CTC.line2
    this.desc.CTC.lpa = resObject.CTC.lpa
    this.desc.about = resObject.about
    this.desc.branches = resObject.branches 
    this.desc.company = resObject.company
    this.desc.eligibility = resObject.eligibility
    this.desc.jobRole = resObject.jobRole
    this.desc.website = resObject.website
    
  }

  async saveProcess(){
    var resObject = await this.http.post<Response>(this.url+'recruitment/saveData',{username:this._auth.username,data:this.process}).toPromise()
    return resObject;
  }
  async getProcess(){
    var resObject = await this.http.post<any>(this.url+'recruitment/getData',{username:this._auth.username}).toPromise()
    
    if(resObject.status){
      resObject.doc.forEach(element => {
        this.process.push(element)
      });
    }else{
      this.process = []
    }
  }
}
