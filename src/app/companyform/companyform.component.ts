import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { CompanyService } from './../service/company.service';
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-companyform',
    templateUrl: './companyform.component.html',
    styleUrls: ['./companyform.component.css']
  })
  export class CompanyformComponent implements OnInit {
    ngOnInit(): void {
    }
    data = {
      company_name: "",
      about:"",
      website:"",
      linkedin:"",
      email:"",
      contact:"",
      CEO: "",
      founder: "",
      found_year: "",
      address: "",
      city: "",
      pincode: "",
      state: "",
      country: ""
    }
personal:any
show:boolean = false
showEdit:boolean = false

key:string
value:string = ""
username:string = ""
pass:string = ""
repeatPass:string = ""
log:string = ""

constructor(private _company:CompanyService,private _auth:AuthService,private _router:Router) { 
  this.personal = Object.keys(this.data)
} 
 
    async submit(){
      if(this.username != "" && this.pass != "" && this.repeatPass != "")
      {
        // both password did'nt match
        if(this.pass != this.repeatPass){
          this.log = "Repeat your password correctly."
        }else{
          // username already exist
          this.log = await  this._auth.signup(this.username,this.pass,"company")
          if(this.log != "the user already exists. use some other username")
          {
            // account signup successfully 
            // add the details of the user to db
            var res = await this._company.saveData(this.username,this.data)
            console.log("accound created successfully",res)
            this._router.navigate(['../companyui']);
          }
        }
        
      }else{
        this.log = "input field can't be empty"
      }
    }

    edit(){
      this.show = !this.show;
    }
    openEdit(k){
      this.key = k
      this.showEdit = true
      console.log(this.key,this.value)
    }
    saveEdit(){
        this.data[this.key] = this.value
      this.closeEdit()
    }
    closeEdit(){
      this.showEdit = false
    }
  }
