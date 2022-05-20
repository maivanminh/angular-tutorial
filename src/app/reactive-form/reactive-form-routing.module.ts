import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routesConfig: Routes = [
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  }
]

@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesConfig)
  ],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
