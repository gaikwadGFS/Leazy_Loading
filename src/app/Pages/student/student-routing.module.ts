import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDetailsComponent } from './Component/basic-details/basic-details.component';
import { AttendanceComponent } from './Component/attendance/attendance.component';

const routes: Routes = [
  {
    path:'',
    children:[
      
      {
        path:'basicdetails',
        component:BasicDetailsComponent
      },
      {
        path:'attendance',
        component:AttendanceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
