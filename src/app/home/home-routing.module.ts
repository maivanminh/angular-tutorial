import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routesConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
