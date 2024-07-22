import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { BasicDetailsComponent } from './Component/basic-details/basic-details.component';
import { AttendanceComponent } from './Component/attendance/attendance.component';


@NgModule({
  declarations: [
    BasicDetailsComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
