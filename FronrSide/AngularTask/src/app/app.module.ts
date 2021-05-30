import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './Components/login/login.component';
import { HeadComponent } from './Components/head/head.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { UpdatepasswordComponent } from './Components/updatepassword/updatepassword.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore } from '@angular/fire/firestore';

import { UserIndexComponent } from './FireBasePart/user-index/user-index.component';
import { GetUserComponent } from './FireBasePart/get-user/get-user.component';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  
    LoginComponent,
    HeadComponent,
    HomeComponent,
    UpdatepasswordComponent,
    
    UserIndexComponent,
         GetUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    AngularFireAuthModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
