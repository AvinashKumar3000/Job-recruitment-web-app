import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url = "http://localhost:9000/"

  constructor(private _auth:AuthService,private http:HttpClient) { 
  }

  async getData(){
    var resObject = await this.http.post<any>(this.url+'company/getData',{username:this._auth.username}).toPromise()    
    // process to set the value
    return resObject;
  }

  async updateData(data:any){
    var resObject = await this.http.post<any>(this.url+'company/updateData',{username:this._auth.username,data:data}).toPromise()    
    // process to set the value
    return resObject;
  }
  async saveData(user:string,data:any){
    var resObject = await this.http.post<any>(this.url+'company/saveData',{username:user,data:data}).toPromise()    
    // process to set the value
    return resObject;
  }
}


