import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageRoutingModule } from "src/app/home-page/home-page/home-page-routing.module";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
