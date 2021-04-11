import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
 departments=[
   {"id":1,"name":"Angular"},
   {"id":2,"name":"JS"},
   {"id":3,"name":"Node"},
   {"id":4,"name":"MVC"},
   {"id":5,"name":"C#"},
 ]
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  selcectedDepartmentId;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
     this.selcectedDepartmentId=parseInt(params.get('id')) ;
    })
    
  }
  goToDeptDetails(dept)
  {
    this.router.navigate(["/Departments",dept.id]);
  }

  isSelected(dept)
  {
    // if(dept.id==this.selcectedDepartmentId)
    // return true;
    // return false;
    return dept.id===this.selcectedDepartmentId;
  }

}
