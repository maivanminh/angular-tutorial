import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { PageErrorComponent } from './page-error/page-error.component';
import { ReactiveFormRoutingModule } from './reactive-form/reactive-form-routing.module';

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
    ReactiveFormRoutingModule,
    RouterModule.forRoot(routesConfig),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
