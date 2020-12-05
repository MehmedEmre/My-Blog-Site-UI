import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { PageTitleComponent } from './page-title/page-title.component';



@NgModule({
  declarations: [CategoryMenuComponent, PageTitleComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[CategoryMenuComponent,PageTitleComponent]
})
export class ComponentsModule { }
