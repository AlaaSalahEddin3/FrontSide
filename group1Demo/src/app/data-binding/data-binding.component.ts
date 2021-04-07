import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-data-binding]',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
  name:string="iti";
  url=window.location.href;
  inputId="myId2";

  textColor="text-danger";

  hasErr=false;
  isSpeical=true;

  messageClasses={
    "text-success":!this.hasErr,
    "text-danger":this.hasErr,
    "text-special":this.isSpeical,
    "myClass":true
  }

  messageStyles={
    color:"gray",
    fontStyle:"italic"
  }

  ngOnInit(): void {
    //alert("Mohamed")
    this.messageStyles.color="green";
  }

  printMSG()
  {
    console.log("Hello")
  }

}
