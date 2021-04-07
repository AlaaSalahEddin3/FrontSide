import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
  MSG="Default"
  ngOnInit(): void {
  }

  DisplayMsg()
  {
    console.log("Welcome from typescript class")
    this.MSG="new msg"
  }
  log(input)
  {
    console.log(input)
  }

}
