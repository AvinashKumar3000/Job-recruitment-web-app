import { StudentService } from './../service/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  constructor(private _student:StudentService) { 

    this.personal = Object.keys(this.data.personal_detail)
    this.education = Object.keys(this.data.education_details)
    this.project = Object.keys(this.data.project_details)
    this.others = ["career_objective","area_of_interest","skills_known","hobbies"]
  }

  ngOnInit(): void {
  }
  log:String = "";
  input:String;
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
  
  async search(){
    var res = await this._student.searchData(this.input)
    console.log(res.found)
    if(res.found){
      this.log = `the following are the data of the username, '${this.input}'.`
      this.data = res.data
    }else{
      this.log = `the following user name not found '${this.input}'.`
    }
  } 
}
