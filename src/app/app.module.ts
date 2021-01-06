import { PagesModule } from './pages/pages.module';


import { AdminNavBarComponent } from './nav-bar/admin-nav-bar/admin-nav-bar.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminNavBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
