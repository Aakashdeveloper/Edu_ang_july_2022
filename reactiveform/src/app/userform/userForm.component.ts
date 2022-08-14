import {Component,OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';


@Component({
    selector:'app-forms',
    templateUrl:'./userForm.component.html'
})

export class UserComponent implements OnInit{
    employeeForm: FormGroup;
    constructor(private fb: FormBuilder) {}

    ngOnInit(){
        this.employeeForm = this.fb.group({
            firstName :['John',[Validators.required,Validators.minLength(3)]]
        })
    }
}

