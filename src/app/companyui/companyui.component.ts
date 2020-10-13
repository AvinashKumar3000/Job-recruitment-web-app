import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companyui',
  templateUrl: './companyui.component.html',
  styleUrls: ['./companyui.component.css']
})
export class CompanyuiComponent implements OnInit {
  username:string = ""
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
    this.username = this._auth.username
  }
  logout(): void {
    this._router.navigate([''])
  }
}
