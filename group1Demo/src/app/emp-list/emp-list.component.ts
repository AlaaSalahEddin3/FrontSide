import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
 employeeList:IEmployee[]=[];

  constructor(private employeeService:EmployeeService) { }
  errorMsg
  ngOnInit(): void {
    this.employeeService.returnAllEmployees().subscribe(
      employeeData=>
      {
        this.employeeList=employeeData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )
  }

}
