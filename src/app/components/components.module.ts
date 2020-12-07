import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from "ngx-pagination"

import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [CategoryMenuComponent, PageTitleComponent, ArticlesComponent],
  imports: [
    CommonModule,RouterModule,NgxPaginationModule
  ],
  exports:[CategoryMenuComponent,PageTitleComponent,ArticlesComponent]
})
export class ComponentsModule { }
