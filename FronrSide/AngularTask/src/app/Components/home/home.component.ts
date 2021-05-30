import { Component, OnInit } from '@angular/core';
import { FireBaseService } from 'src/app/Services/Firebase/fire-base.service';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _authenticationService:LoginService) { }

  ngOnInit(): void {
  }
 
  isUserLoggedIn():boolean{
    return this._authenticationService.isLoggedIn();
  }
 
}
