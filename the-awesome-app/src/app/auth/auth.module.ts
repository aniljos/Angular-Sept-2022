import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { UserService } from './services/user-service';
import { UserServiceImpl } from './services/user-service-impl';
import { UserServiceMock } from './services/user-service-mock';

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
  ],
  providers:[
    {provide: UserService, useClass: UserServiceImpl}
  ]
})
export class AuthModule { }
