import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonCrudComponent } from '../../components/json-crud/json-crud.component';

const routes: Routes = [
  {
    path: 'crud',
    component: JsonCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonRoutingModule { }
