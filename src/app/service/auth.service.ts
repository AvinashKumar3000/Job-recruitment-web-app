import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  status:boolean = false
  url:string = 'http://localhost:9000/auth/'
  username:string
  constructor(private http: HttpClient) { }
  
  async login(user:string,pass:string){
    var obj = await this.http.post<{log:string,status:boolean,type:string}>(this.url+'login', {'username' : user, 'password' : pass}).toPromise()
    this.status = obj.status
    this.username = user
    return obj;
  }

  async signup(user:string,pass:string,tp:string){
    var resObject = await this.http.post<{log:string,status:boolean}>(this.url+'isUserExist',{"username":user}).toPromise()
    if(!resObject.status){
      var info = await this.http.post<{log:string,status:boolean}>(this.url+"newUser",{"username":user,"password":pass,userType:tp}).toPromise()
      return info.log
    }else{
      return resObject.log
    }
  }

  async changePassword(pass:string){
    var resObject = await this.http.post<{log:string,status:boolean}>(this.url+'changePassword',{"username":this.username,password:pass}).toPromise()
    if(!resObject.status){
      return resObject.log
    }else{
      return resObject.log
    }
  }
  
}
