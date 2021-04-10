import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {
 employeeList:IEmployee[]=[];

  constructor(private employeeService:EmployeeService) { }
  errorMsg;
  ngOnInit(): void {
   // this.employeeList=this.employeeService.returnAllEmployees();
   this.employeeService.returnAllEmployees().subscribe(
    data=>
    {
      this.employeeList=data;
    },
    error=>
    {
     this.errorMsg=error;
    }
  )

  console.log(this.employeeList)
  }

}
