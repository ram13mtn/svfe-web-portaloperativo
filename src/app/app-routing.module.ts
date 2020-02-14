import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PruebaComponent } from './prueba/prueba.component';
import { AthleteComponent } from './athlete/athlete.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth_guards/auth.guards';


const routes: Routes = [
  { path: '', redirectTo: '/prueba', pathMatch: 'full' },
  { path: 'prueba', component: PruebaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'athlete', component: AthleteComponent, canActivate: [ AuthGuard ] }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
