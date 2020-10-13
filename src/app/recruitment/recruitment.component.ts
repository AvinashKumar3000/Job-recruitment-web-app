import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { RecruitmentService } from './../service/recruitment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  constructor(private _rec:RecruitmentService,private _router:Router,private _auth:AuthService) { }
  date = new Date();
  ngOnInit(): void {
  }
  async save(){

    var res1:any = await this._rec.saveDesc();
    var res2:any = await this._rec.saveProcess();
    console.log(res1)
    console.log(res2)
  }
  cancel(){
    console.info("hai this is avinash")
    this._router.navigate(['/companyui'])
  }

}
