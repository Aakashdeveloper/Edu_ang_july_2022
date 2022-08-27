import { Component } from '@angular/core';
import { ILogin } from './loginForm.model';
import { NgForm } from '@angular/forms';
import { LoginFormService } from '../services/loginForm.service';
import { Router } from '@angular/router';
import { LoginRes, UserRes } from './loginForm.model';

@Component({
    templateUrl: './loginForm.component.html'
})

export class LoginFormsComponent {

    loginError:string=''

    constructor(private loginService: LoginFormService,
        private router:Router) {}
    
    loginEmployee = new ILogin('Amit@gmail.com','12345678')

    submitForm(Form: NgForm):void{
        console.log(Form.value);
        this.loginService.loginEmp(Form.value)
            .subscribe((res:LoginRes) => {
               this.loginError = ''
               this.loginService.getUserInfo(res['token'])
               .subscribe((response:UserRes) =>(this.validateDataUser(response['role'],response['name'],response['email'],response['phone'])) )
            },
            (err:any[]) => {
                this.loginError = "Please Enter Correct Details"
            })
      
    }

    validateDataUser(role:string,name:string,email:string,phone:string):void{
        let userResponse = `${role},${name},${email},${phone}`;
        sessionStorage.setItem('userResponse',userResponse)
        localStorage.setItem('Role_Type',role)
        this.router.navigate(['/'])
    }

}