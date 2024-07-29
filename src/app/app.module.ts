import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoComponent } from './Components/demo/demo.component';
import { NgOnchangesComponent } from './Components/ng-onchanges/ng-onchanges.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemoComponent,
    NgOnchangesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
