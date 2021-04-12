import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AuthModule } from 'src/auth/auth.module';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './square.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TDFComponent } from './tdf/tdf.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavComponent,
    RightNavComponent,
    MainContentComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    PipesComponent,
    SquarePipe,
    ParentComponent,
    ChildComponent,
    EmpListComponent,
    EmpDetailsComponent,
    DepartmentListComponent,
    PageNotFoundComponent,
    DepartmentDetailsComponent,
    DepartmentOverviewComponent,
    ContactInfoComponent,
    TDFComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
