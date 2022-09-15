import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;
  public errorMessage: string = "";

  constructor(private httpClient: HttpClient, private router: Router) { 

      this.loginFormGroup = new FormGroup({
        id: new FormControl("", [Validators.required, Validators.minLength(3)], []),
        pwd: new FormControl("", [Validators.required], [])
      });
  }

  ngOnInit(): void {
  }

  login(){

     if(this.loginFormGroup.valid){

        this.errorMessage="";
        const idCtrl = this.loginFormGroup.get('id');
        const pwdCtrl = this.loginFormGroup.get('pwd');

        console.log("UserName", idCtrl?.value);
        console.log("Password", pwdCtrl?.value);

        const url = "http://localhost:9000/login";

        this.httpClient
            .post(url, {name: idCtrl?.value, password: pwdCtrl?.value})
            .subscribe(() => {
                
                this.errorMessage="";
                this.router.navigateByUrl("/products");
            }, () => {
                
                this.errorMessage="Invalid Credentials";
            })
     }
     else{
      this.errorMessage="Please provide all the inputs";
     }
      
  }

}
