import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  
  openSearch:boolean = false;
  isLoggedIn:boolean = false;
  showMiniCart : boolean = false;
  constructor(private _router:Router, 
    private _authenticationService:LoginService) { }

  ngOnInit(): void {
  }
 
 
 
  isUserLoggedIn():boolean{
    return this._authenticationService.isLoggedIn();
  }
 
  logoutUser(){
 
    this._authenticationService.logout();
  }


}
