import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { MainNavBarComponent } from '../nav-bar/main-nav-bar/main-nav-bar.component';


import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [MainLayoutComponent,MainNavBarComponent,AboutMeComponent,ContactComponent,HomeComponent, ArticleComponent],//Declarationa yazılı tüm componentler birbirini tanır.
  imports: [
    CommonModule,
    ComponentsModule,//category-menu , page-title ve article component import edildi
    RouterModule,
  ]
})
export class PagesModule { }
