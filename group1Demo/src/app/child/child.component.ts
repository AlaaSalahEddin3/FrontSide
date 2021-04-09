import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input('parentData') name;
   testProp="Test prop";

  @Output() childData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
   // this.childData.emit("hello parent from child");

  }
  sendData()
  {
    this.childData.emit("hello parent from child");

  }

}
