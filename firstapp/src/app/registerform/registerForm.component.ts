import { Component } from '@angular/core';
import { IUser } from './registerForm.model';
import { NgForm } from '@angular/forms';
import { RegisterFormService } from '../services/registerForm.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './registerForm.component.html'
})

export class RegsiterFormsComponent {

    constructor(private formService: RegisterFormService,
        private router:Router) {}
    
    myEmployee = new IUser('Amit','Amit@gmail.com','12345678','9876543210')

    submitForm(Form: NgForm):void{
        console.log(Form.value);
        this.formService.registerEmp(Form.value)
            .subscribe((res:any[]) => {console.log('Data Posted',res)})
       // this.router.navigate(['/login'])
    }

}