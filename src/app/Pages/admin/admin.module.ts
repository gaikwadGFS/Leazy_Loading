import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BillsComponent } from './Pages/bills/bills.component';
import { EmpSlarayComponent } from './Pages/emp-slaray/emp-slaray.component';


@NgModule({
  declarations: [
    BillsComponent,
    EmpSlarayComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
