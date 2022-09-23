import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmingaurdGuard } from './admingaurd.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFountComponent } from './components/not-fount/not-fount.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component : HomeComponent},
  {path:'login' , component : LoginComponent},
  {path:'register' , component : RegisterComponent},
  {path:'admin',
  canActivate:[AdmingaurdGuard],
  loadChildren:()=> import('./modules/admin/admin.module').then(m => m.AdminModule) },
  {path:'**' , component : NotFountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
