import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { PageErrorComponent } from './page-error/page-error.component';

const routesConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageErrorComponent
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forRoot(routesConfig),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
