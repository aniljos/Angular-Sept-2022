import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes =[
  {path: "login", component: LoginComponent}
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
