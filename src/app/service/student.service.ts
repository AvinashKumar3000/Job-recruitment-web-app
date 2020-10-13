import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  url = "http://localhost:9000/"

  constructor(private _auth:AuthService,private http:HttpClient) { 
  }

  async getData(){
    var resObject = await this.http.post<any>(this.url+'student/getData',{username:this._auth.username}).toPromise()    
    // process to set the value
    return resObject.data;
  }

  async searchData(searchKey:String){
    var resObject = await this.http.post<any>(this.url+'student/getdata',{username:searchKey}).toPromise()    
    // process to set the value
    return resObject;
  }
  

  async updateData(data:any){
    var resObject = await this.http.post<any>(this.url+'student/updateData',{username:this._auth.username,data:data}).toPromise()    
    // process to set the value
    return resObject;
  }
  async saveData(user:string,data:any){
    var resObject = await this.http.post<any>(this.url+'student/saveData',{username:user,data:data}).toPromise()    
    // process to set the value
    return resObject;
  }
}
