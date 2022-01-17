import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowerComponent } from './flower/flower.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '', component : FlowerComponent}
];


@NgModule({
  declarations: [
    FlowerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GalleryModule { }
