import { ArticleComponent } from './../../pages/article/article.component';
import{HomeComponent} from '../../pages/home/home.component'
import{ContactComponent} from '../../pages/contact/contact.component'
import{AboutMeComponent} from '../../pages/about-me/about-me.component'
import { MainLayoutComponent } from './main-layout.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [

  {path:"",component:MainLayoutComponent,children:[

    {path:"",component:HomeComponent},
    {path:"pages/:page",component:HomeComponent},
    {path:"about",component:AboutMeComponent},
    {path:"contact",component:ContactComponent},
    {path:"article/:id",component:ArticleComponent},
    {path:"*",redirectTo:"home",pathMatch:"full"}

  ]}

];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class MainRoutingModule { }
