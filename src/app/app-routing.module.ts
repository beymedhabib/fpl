import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { HomeComponent } from './home/home.component';
import { AddsujetComponent } from './addsujet/addsujet.component';
import { ListsujetComponent } from './listsujet/listsujet.component';
import { AllsujetComponent } from './allsujet/allsujet.component';
import { SujetinfoComponent } from './sujetinfo/sujetinfo.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'addsujet', component: AddsujetComponent},
  { path: 'listsujet', component: ListsujetComponent},
  { path: 'allsujet', component: AllsujetComponent},
  { path: 'sujetinfo/:id', component: SujetinfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
