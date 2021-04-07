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
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './square.pipe';

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
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
