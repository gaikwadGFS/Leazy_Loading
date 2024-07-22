import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './Pages/books/books.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'books',
        component:BooksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
