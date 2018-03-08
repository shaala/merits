import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 // Our components to route

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperienceComponent } from './components/profile/experience/experience.component';
import { AboutComponent } from './components/profile/about/about.component';
import { EducationComponent } from './components/profile/education/education.component';
import { NavbarComponent } from './components/profile/navbar/navbar.component';


const Routes: Routes = [
  {
     path: '',
     redirectTo: '/app-home',
     pathMatch: 'full'
  },
  {
      path: 'app-home',
      component: HomeComponent
  },
  {
    path: 'app-profile',
    component: ProfileComponent,
  },
  {
    path : 'app-navbar',
    component: NavbarComponent,
    children:
    [ {path: 'education/:id', component: EducationComponent}]
  }
];


@NgModule({
  imports: [
      RouterModule.forRoot(Routes)
  ],
  exports: [
      RouterModule
  ]
})
export class RoutingModule { }
