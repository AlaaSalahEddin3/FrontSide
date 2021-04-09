import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  name:string="Hello child from parent";
  dataFromChild:string='';
  @ViewChild(ChildComponent) childComponent:ChildComponent;
  // @ViewChild(ChildComponent) childComponent2:ChildComponent;

  // @ViewChild(ChildComponent) childComponent3=new ChildComponent();
  //@ViewChildren

  constructor() {
   // this.childComponent=new ChildComponent();
  }

  ngOnInit(): void {
    //this.name="ay 7aga"
  }
  
  ngAfterViewInit()
  {
    console.log(this.childComponent.testProp)

  }

  getDataFromChild()
  {
    this.childComponent.sendData
    //this.childComponent2.name;
  }

  captureData(dataFromChild)
  {
    console.log(dataFromChild);
  }

}
