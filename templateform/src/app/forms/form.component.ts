import { Component } from '@angular/core';
import { IUser } from './forms.model';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './form.component.html'
})

export class FormsComponent {
    
    language: string[] = ['Node','React','Angular','JavaScript'];
    myEmployee = new IUser('','','','','')
    //myEmployee = new IUser('Amit','Sharma','Amit@gmail.com','12345678','Node')

    firstToUpper(value:string):void{
        if(value.length>0){
            value = value.trim()
            this.myEmployee.firstName = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase();
        }else{
            this.myEmployee.firstName = value
        }
    }
}