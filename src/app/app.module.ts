import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoComponent } from './Components/demo/demo.component';
import { NgOnchangesComponent } from './Components/ng-onchanges/ng-onchanges.component';
import { ReactiveFormComponent } from './Pages/Reactive-Form/Components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormBuilderComponent } from './Pages/Reactive-Form/Components/reactive-form-builder/reactive-form-builder.component';
import { JsonCrudComponent } from './Pages/JSON-CRUD/components/json-crud/json-crud.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemoComponent,
    NgOnchangesComponent,
   
    ReactiveFormComponent,
    ReactiveFormBuilderComponent,
    JsonCrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
