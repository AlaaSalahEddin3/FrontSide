import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TDFComponent implements OnInit {
  topics=["Angular","React" ,"Node"]
  userModel=new User('','mo@gmail.com',"","Assuit","Assuit","71111","Angular","eveninig",true);
  constructor() { }

  ngOnInit(): void {
  }

}
