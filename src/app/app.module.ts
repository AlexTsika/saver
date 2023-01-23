import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { ResultsComponent } from './results/results.component';
import { RouterModule, Routes } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    ResultsComponent,
    RouterModule.forRoot(routes)
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }