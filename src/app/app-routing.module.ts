import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

{path:"",loadChildren:()=>import("./layout/main-layout/main-routing.module").then(x=>x.MainRoutingModule)},
{path:"admin",loadChildren:()=>import("./layout/admin-layout/admin-routing.module").then(x=>x.AdminRoutingModule)},
{path:"**",redirectTo:"",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
