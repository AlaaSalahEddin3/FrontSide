import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }
  car="LOGhAN"
  displayName=false;
  isLoggedIn=true;
  userName="Safaa"
  colors=["red","green","blue","yellow"];
  
  products=[
    {id:1,name:"phone"},
    {id:2,name:"labTop"}
  ] 

  ngOnInit(): void {
  }

}
