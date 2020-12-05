import { AboutMeComponent } from './about-me/about-me.component';

import { ContactComponent } from './contact/contact.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { MainNavBarComponent } from '../nav-bar/main-nav-bar/main-nav-bar.component';


import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from '../layout/main-layout/main-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MainLayoutComponent,MainNavBarComponent,AboutMeComponent,ContactComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MainRoutingModule, //Routing işlemini belirttik
  ],
  exports:[MainNavBarComponent]
})
export class MainLayoutModule { }
