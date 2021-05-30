import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './app/Components/register/register.component';
import { LoginService } from './app/Services/login.service';
import { LoginComponent } from './app/Components/login/login.component';
import { HomeComponent } from './app/Components/home/home.component';
import { UpdatepasswordComponent } from './app/Components/updatepassword/updatepassword.component';
import { UserIndexComponent } from './app/FireBasePart/user-index/user-index.component';
import { GetUserComponent } from './app/FireBasePart/get-user/get-user.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
 {path:'register',component:RegisterComponent},
 {path:'login',component:LoginComponent},
{path:'userData',component:UserIndexComponent},
 {path:'updatepassword',component:UpdatepasswordComponent},
 {path:'AddNew',component:RegisterComponent},
 {path:'home',component:HomeComponent},
 {path:'userById', component:GetUserComponent}

 ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
