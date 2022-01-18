import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageRoutingModule } from "src/app/home-page/home-page/home-page-routing.module";
import { FlowerComponent } from "src/app/gallery/flower/flower.component";
import { CactusComponent } from "src/app/gallery/cactus/cactus.component";

const routes: Routes = [
  { path: 'flower', component: FlowerComponent },
  { path: 'cactus', component: CactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
