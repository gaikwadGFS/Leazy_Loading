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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemoComponent,
    NgOnchangesComponent,
   
    ReactiveFormComponent,
    ReactiveFormBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
