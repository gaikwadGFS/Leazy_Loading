import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherInfoComponent } from './Component/teacher-info/teacher-info.component';
import { LeavesComponent } from './Component/leaves/leaves.component';


@NgModule({
  declarations: [
    TeacherInfoComponent,
    LeavesComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
