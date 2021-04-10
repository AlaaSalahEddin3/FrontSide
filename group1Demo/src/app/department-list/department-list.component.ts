import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToDeptDetails(dept)
  {
    this.router.navigate(["/Departments",dept.id]);
  }

}
