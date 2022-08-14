import { Component,OnInit } from '@angular/core';
import { LoginFormService } from '../loginForm/loginForm.service';
import { UserRes } from '../loginForm/loginForm.model';
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit{

    constructor(private loginService:LoginFormService,
                private router:Router){}
    
    token:string|null = ''
    userInfo: UserRes = {
        "_id":"",
        "name":"",
        "email":"",
        "phone":"",
        "role":"",
        "__v":0
    }

    ngOnInit(): void{
        this.token = localStorage.getItem('Token_Number');
        this.loginService.getUserInfo(this.token?this.token:'')
            .subscribe((res:UserRes) => this.userInfo = res)
    }

    logoutUser():void{
        localStorage.removeItem('Token_Number');
        localStorage.removeItem('Role_Type');
        this.router.navigate(['/login'])
    }
}