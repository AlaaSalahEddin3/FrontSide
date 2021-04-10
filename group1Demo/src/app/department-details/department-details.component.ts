import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }
 deptId;
  ngOnInit(): void {
    //this.deptId =5;
   //this.deptId= parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
   this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
   {
     this.deptId=parseInt(params.get('id'));
   })
  }
  goNext()
  {
     let nextId=this.deptId+1;
     //this.deptId=nextId;
     this.router.navigate(["/Departments",nextId])
  }

  goPrev()
  {
    let prevId=this.deptId-1;
    this.router.navigate(["/Departments",prevId])
  }

}
