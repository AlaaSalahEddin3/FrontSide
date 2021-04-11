import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/Departments',pathMatch:'full'},
  {path:'Employees',component:EmpListComponent},
  {path:'Departments',component:DepartmentListComponent},
  {
    path:'Departments/:id',
    component:DepartmentDetailsComponent,
    children:[
      {path:'overview',component:DepartmentOverviewComponent},
      {path:'contact',component:ContactInfoComponent}
    ]},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
