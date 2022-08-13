import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,
        Validators, AbstractControl} from '@angular/forms'

@Component({
    templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit{

    employeeForm: FormGroup

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.employeeForm = this.fb.group({
            firstName:['kevin',[Validators.required], Validators.minLength(3)]
        })
    }

}