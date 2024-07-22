import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './Pages/bills/bills.component';
import { EmpSlarayComponent } from './Pages/emp-slaray/emp-slaray.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'bills',
        component:BillsComponent
      },
      {
        path:'empSal',
        component:EmpSlarayComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
