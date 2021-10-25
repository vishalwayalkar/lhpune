import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
// import { CoursesComponent } from './courses/courses.component';
// import { EnrollmentComponent } from './enrollment/enrollment.component';
// import { LighthouseComponent } from './lighthouse/lighthouse.component';
import { AuthGuard } from 'src/app/shared/authentication/auth.guard';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  // {
  //   path:"lighthouse",
  //   component:LighthouseComponent
  // },
  // {
  //   path:"courses",
  //   component:CoursesComponent
  // },
  // {
  //   path:"enrollment",
  //   component:EnrollmentComponent
  // }

  // {
  //   path: "",
  //   loadChildren:()=>import('./light-house/light-house.module').then(m => m.LightHouseModule),
  // },
  {
    path:"",
    component:LoginComponent
  },
  {
    path: "lighthouse",canActivate:[AuthGuard],
    loadChildren:()=>import('./light-house/light-house.module').then(m => m.LightHouseModule),
  },
  {
    path: "courses",canActivate:[AuthGuard],
    loadChildren:()=>import('./courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: "enrollment",canActivate:[AuthGuard],
    loadChildren:()=>import('./enrollment/enrollment.module').then(m => m.EnrollmentModule),
  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
