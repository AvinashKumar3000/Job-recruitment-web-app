import { CompanyService } from './../service/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-your-info',
  templateUrl: './company-your-info.component.html',
  styleUrls: ['./company-your-info.component.css']
})
export class CompanyYourInfoComponent implements OnInit {

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

  constructor(private _company:CompanyService) { 
    this.personal = Object.keys(this.data)
  }
  ngOnInit(): void {
    this.getData()
  }
  async getData() {
    var obj = await this._company.getData()
    this.data = obj;
  }
  edit(){
    this.show = !this.show;
  }
  openEdit(k:string){
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
  async saveData(){
    var res = await this._company.updateData(this.data)
    console.log(res)
  }
}
