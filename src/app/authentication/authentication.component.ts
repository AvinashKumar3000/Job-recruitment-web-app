import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


interface ResponseTemplate{
  log:string,
  status:boolean,
  type:string
}

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  log:string = ""
  oldPass:string = ""
  newPass:string = ""
  repeatPass:string = ""
  ngOnInit(): void {
  }
  async changePassword(){
    if(this.oldPass != "" && this.newPass != "" && this.repeatPass != "")
    {
      var result:ResponseTemplate = await this._auth.login(this._auth.username,this.oldPass)
      this.log = result.log;
      if(result.status){
        if(this.newPass == this.repeatPass){
          this.log = await this._auth.changePassword(this.newPass)
        }else{
          this.log = "the new and repeat field not match "
        }
      }else{
        this.log="you oldPass password is incorrect";
      }
    }else{
      this.log = "input field can't be empty"
    }
  }
  
}



    