import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path:'',
    component:NavbarComponent,
    children:[
      {
        path:'teacher',
        loadChildren:()=> import('./Pages/teacher/teacher.module').then((m => m.TeacherModule))
      },
      {
        path:'student',
        loadChildren:()=> import('./Pages/student/student.module').then((x => x.StudentModule))
      },
      {
          path:'adminDepartment',
          loadChildren:()=> import('./Pages/admin/admin.module').then((y=>y.AdminModule))
      },
      {
        path:'lib',
        loadChildren:()=> import('./Pages/library/library.module').then((y=>y.LibraryModule))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
