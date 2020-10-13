import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface ResponseTemplate{
  log:string,
  status:boolean,
  type:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  login:boolean = true;
  username:string;
  password:string;
  loginfail:boolean = false;
  logmsg:string;
  constructor(private _auth:AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  
  async auth(){
    if(this.username != "" && this.password != "" )
    {
      var result:ResponseTemplate = await this._auth.login(this.username,this.password)
      this.logmsg = result.log;
      if(result.status){
        if(result.type == "student")
          this._router.navigate(['/studentui']);
        else
          this._router.navigate(['/companyui']);
        this.loginfail = false;
      }else{
        this.loginfail=true;
      }
    }else{
      this.loginfail=true;
      this.logmsg = "input field can't be empty"
    }
  }

}
