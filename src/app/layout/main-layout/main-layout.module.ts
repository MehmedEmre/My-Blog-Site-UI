import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './../../contact/contact.component';
import { AboutMeComponent } from './../../about-me/about-me.component';
import { HomeComponent } from './../../home/home.component';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [

  {path:"",component:MainLayoutComponent,children:[

    {path:"home",component:HomeComponent},
    {path:"about",component:AboutMeComponent},
    {path:"contact",component:ContactComponent},
    {path:"*",redirectTo:"home",pathMatch:"full"}

  ]}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,[RouterModule.forChild(routes)]
  ]
})
export class MainLayoutModule { }
