import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from "ngx-pagination"

import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ArticlesComponent } from './articles/articles.component';
import { UrlFormatPipe } from '../Pipes/url-format.pipe';



@NgModule({
  declarations: [CategoryMenuComponent, PageTitleComponent, ArticlesComponent, UrlFormatPipe],
  imports: [
    CommonModule,RouterModule,NgxPaginationModule
  ],
  exports:[CategoryMenuComponent,PageTitleComponent,ArticlesComponent,UrlFormatPipe]
})
export class ComponentsModule { }
