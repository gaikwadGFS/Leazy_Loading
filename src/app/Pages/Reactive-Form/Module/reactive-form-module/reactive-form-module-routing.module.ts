import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from '../../Components/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: 'Form',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormModuleRoutingModule { }
