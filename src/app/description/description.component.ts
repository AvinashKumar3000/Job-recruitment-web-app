import { RecruitmentService } from './../service/recruitment.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit,OnDestroy {

  constructor(private _rec:RecruitmentService) { }

  desc:any;
  ngOnInit(): void {
    this._rec.getDesc();
    this.desc = this._rec.desc
  }
  ngOnDestroy(): void {
    this._rec.desc = this.desc;
  }
  
}
