import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;
  constructor() { 

      this.loginFormGroup = new FormGroup({
        id: new FormControl("", [Validators.required, Validators.minLength(3)], []),
        pwd: new FormControl("", [Validators.required], [])
      });
  }

  ngOnInit(): void {
  }

  login(){

      const idCtrl = this.loginFormGroup.get('id');
      const pwdCtrl = this.loginFormGroup.get('pwd');

      console.log("UserName", idCtrl?.value);
      console.log("Password", pwdCtrl?.value);
  }

}
