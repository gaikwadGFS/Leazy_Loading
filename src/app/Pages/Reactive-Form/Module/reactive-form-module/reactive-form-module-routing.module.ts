import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from '../../Components/reactive-form/reactive-form.component';
import { ReactiveFormBuilderComponent } from '../../Components/reactive-form-builder/reactive-form-builder.component';

const routes: Routes = [
  {
    path: 'Form-Control',
    component: ReactiveFormComponent
  },
  {
    path: 'Form-Builder',
    component: ReactiveFormBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormModuleRoutingModule { }
