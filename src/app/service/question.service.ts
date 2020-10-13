import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url = "http://localhost:9000/"
  constructor(private _http:HttpClient) { }

  async saveData(obj:any){
    var res = await this._http.post(this.url+"qn/saveData",obj).toPromise()
    return res;
  }
  async getData(id:string){
    var res = await this._http.post<any>(this.url+"qn/getData",{id:id}).toPromise()
    console.log(res)
    if (res.status){
      return res.data
    }else{
      return null
    }
  }
  async isIdExist(id:string){
    var res = await this._http.post<any>(this.url+"qn/isIdExist",{id:id}).toPromise()
    console.log(res)
    return res.status
  }
  async getFirst(){
    var res = await this._http.post<any>(this.url+"qn/getFirst",{}).toPromise()

    return res.data
  }
  async getAll(){
    var res = await this._http.post<any>(this.url+"qn/getAll",{}).toPromise()
    return res
  }
  async editId(a:String,b:string){
    console.log({id:a,newId:b})
    var res = await this._http.post<any>(this.url+"qn/editId",{id:a,newId:b}).toPromise()
    console.log(res)
  }
  
}
