import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InputComponent } from './input/input.component';
import { ResultsComponent } from './results/results.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'results', component: ResultsComponent, canActivate: [AuthGuard]},
  { path: 'input', component: InputComponent, canActivate: [AuthGuard]}
  ];

@NgModule({
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
