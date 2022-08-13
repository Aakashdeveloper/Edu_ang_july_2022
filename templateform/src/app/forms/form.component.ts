import { Component } from '@angular/core';
import { IUser } from './forms.model';
import { NgForm } from '@angular/forms';
import { FormService } from './form.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './form.component.html'
})

export class FormsComponent {

    constructor(private formService: FormService,
        private router:Router) {}
    
    language: string[] = ['Node','React','Angular','JavaScript'];
    //myEmployee = new IUser('','','','','')
    myEmployee = new IUser('Amit','Sharma','Amit@gmail.com','12345678','Node')
    hasCodeLangError:boolean = false;

    firstToUpper(value:string):void{
        if(value.length>0){
            value = value.trim()
            this.myEmployee.firstName = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase();
        }else{
            this.myEmployee.firstName = value
        }
    }

    validateCodeLang():void{
        if(this.myEmployee.clang === 'default'){
            this.hasCodeLangError = true
        }else{
            this.hasCodeLangError = false
        }
    }

    showPassword(event:Event):void{
        console.log((event.target as HTMLInputElement).type)
        let inputType = (event.target as HTMLInputElement).type;
        if(inputType === 'password'){
            (event.target as HTMLInputElement).type = 'text'
        }else{
            (event.target as HTMLInputElement).type = 'password'
        }
    }

    submitForm(Form: NgForm):void{
        console.log(Form.value);
        this.formService.postEmp(Form.value)
            .subscribe((res:any[]) => {console.log('Data Posted',res)})
        this.router.navigate(['/after'])
    }

}