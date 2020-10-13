import { StudentService } from './../service/student.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-your-info',
  templateUrl: './your-info.component.html',
  styleUrls: ['./your-info.component.css']
})
export class YourInfoComponent implements OnInit {

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
        pincode: 0,
        state: "",
        country: ""
      },
    education_details: {
        SSLC: {
            percentage: 0,
            institute_name: "",
            year: 0
          },
        HSC: {
            percentage: 0,
            institute_name: "",
            year: 0
          },
        UG: {
            percentage: 0,
            institute_name: "",
            year: 0,
            degree:""
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

  constructor(private _student:StudentService) { 
    this.personal = Object.keys(this.data.personal_detail)
    this.education = Object.keys(this.data.education_details)
    this.project = Object.keys(this.data.project_details)
    this.others = ["career_objective","area_of_interest","skills_known","hobbies"]
  }
  ngOnInit(): void {
    this.getData()
  }
  async getData() {
    var obj = await this._student.getData()
    this.data = obj;
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
    }else if(this.type == 14){
      this.data.education_details[this.key].degree = this.value
    }
    this.closeEdit()
  }
  closeEdit(){
    this.showEdit = false
  }
  async saveData(){
    var res = await this._student.updateData(this.data)
    console.log(res)
  }
}
