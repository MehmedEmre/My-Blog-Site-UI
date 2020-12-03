import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

{path:"",loadChildren:()=>import("./layout/main-layout/main-layout.module").then(x=>x.MainLayoutModule)},
{path:"admin",loadChildren:()=>import("./layout/admin-layout/admin-layout.module").then(x=>x.AdminLayoutModule)},
{path:"**",redirectTo:"",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
