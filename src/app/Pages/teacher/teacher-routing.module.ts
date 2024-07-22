import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherInfoComponent } from './Component/teacher-info/teacher-info.component';
import { LeavesComponent } from './Component/leaves/leaves.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'teacherInfo',
        component:TeacherInfoComponent
      },
      {
        path:'leaves',
        component:LeavesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
