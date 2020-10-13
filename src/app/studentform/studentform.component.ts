import { Router } from '@angular/router';
import { StudentService } from './../service/student.service';
import { AuthService } from './../service/auth.service';
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-studentform',
    templateUrl: './studentform.component.html',
    styleUrls: ['./studentform.component.css']
  })
  export class StudentformComponent implements OnInit {
    ngOnInit(): void {
    }

    data = {
      personal_detail: {
          name: "",
          fathername: "",
          DOB: "",
          martial_status: "",
          gender: "",
          language: "",
          address: "",
          city: "",
          pincode: "",
          state: "",
          country: ""
        },
      education_details: {
          SSLC: {
              percentage: "",
              institute_name: "",
              year: ""
            },
          HSC: {
              percentage: "",
              institute_name: "",
              year: ""
            },
          UG: {
              percentage: "",
              institute_name: "",
              year: ""
            }
        },
      project_details: {
          project_topic: "",
          technology_used: "",
          desc: ""
        },
      exta_ciricular: {
          1: ""
        },
      co_ciricular: {
          1: ""
        },
      internship: {
          1: {
              company_name: "",
              duration: "",
              desc: ""
            }
        },
      contanct_details: {
          email: "",
          mobile: ""
        },
      username: "",
      career_objective: "",
      area_of_interest: "",
      skills_known: "",
      hobbies: "",
      
    }
    personal:any
    education:any
    project:any
    others:any
    show:boolean = false
    showEdit:boolean = false
    
    type:number
    key:string
    value:string = ""
    log:string = ""
    username:string = ""
    pass:string = ""
    repeatPass:string = ""
  
    constructor(private _auth:AuthService,private _student:StudentService,private _router: Router) { 
      this.personal = Object.keys(this.data.personal_detail)
      this.education = Object.keys(this.data.education_details)
      this.project = Object.keys(this.data.project_details)
      this.others = ["career_objective","area_of_interest","skills_known","hobbies"]
    }

    async submit(){
      if(this.username != "" && this.pass != "" && this.repeatPass != "")
      {
        // both password did'nt match
        if(this.pass != this.repeatPass){
          this.log = "Repeat your password correctly."
        }else{
          // username already exist
          this.log = await  this._auth.signup(this.username,this.pass,"student")
          if(this.log != "the user already exists. use some other username")
          {
            // account signup successfully 
            // add the details of the user to db
            var res = await this._student.saveData(this.username,this.data)
            console.log("accound created successfully",res)
            this._router.navigate(['../studentui']);
          }
        }
        
      }else{
        this.log = "input field can't be empty"
      }
    }

    edit(){
      this.show = !this.show;
    }
    openEdit(t,k){
      this.type = t
      this.key = k
      this.showEdit = true
      console.log(this.type,this.key,this.value)
    }
    saveEdit(){
      if(this.type == 1){
        this.data.personal_detail[this.key] = this.value
      }
      else if(this.type == 3){
        this.data.project_details[this.key] = this.value
      }
      else if(this.type == 4){
        this.data[this.key] = this.value
      }
      else if(this.type == 11){
        this.data.education_details[this.key].percentage = this.value
      }
      else if(this.type == 12){
        this.data.education_details[this.key].institute_name = this.value
      }
      else if(this.type == 13){
        this.data.education_details[this.key].year = this.value
      }
      else if(this.type == 14){
        this.data.education_details[this.key].degree = this.value
      }
      
      this.closeEdit()
    }
    closeEdit(){
      this.showEdit = false
    }
  }
