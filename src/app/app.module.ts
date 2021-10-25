import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { LighthouseComponent } from './lighthouse/lighthouse.component';
// import { CoursesComponent } from './courses/courses.component';
// import { EnrollmentComponent } from './enrollment/enrollment.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { MyPipePipe } from './shared/customPipe/my-pipe.pipe';
// import { PipePipe } from './shared/pipe/pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavbarComponent,
    LoginComponent,
    PagenotfoundComponent,
    FooterComponent,
    MyPipePipe,
    // PipePipe,
    // DashboardComponent,
    // DashboardComponent,
    // LighthouseComponent,
    // CoursesComponent,
    // EnrollmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
