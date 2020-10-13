import { RecruitmentService } from './../service/recruitment.service';
import { Component, OnInit } from '@angular/core';

interface ArrayType{
  type:number,
  type_name:string,
  title:string,
  desc:string,
  link:string,
  date:string,
  time:string
}

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css']
})
export class HomeCompanyComponent implements OnInit {

  constructor(private _rec:RecruitmentService) { }
  recItems:Array<ArrayType> = []
  ngOnInit(): void {
    this._rec.process = []
    this._rec.getProcess()
    this.recItems = this._rec.process;
  }

}
