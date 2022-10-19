import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'' , component : DashboardComponent , children :[
    {path:'about', component : AboutComponent},
    {path:'about/:msg', component:AboutComponent},
    {path:'home', component : HomeComponent},
    {path:'contact', component : ContactComponent},
    {path:'contact/:id', component : ContactComponent},
    {path:'', redirectTo : 'about',pathMatch:"full"},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 

}
