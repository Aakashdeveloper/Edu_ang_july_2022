import { Component,OnInit } from '@angular/core';
import { UserRes } from '../loginform/loginForm.model';
import { LoginFormService } from '../services/loginForm.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    //styles:['h1{color:red;font-size:40px}','p{}']
    styleUrls:['./header.css']
})

export class HeaderComponent implements OnInit{

    constructor(private loginService:LoginFormService,
        private router:Router,
        private route: ActivatedRoute){}

    token:string|null = ''
    userInfo: UserRes = {
        "_id":"",
        "name":"",
        "email":"",
        "phone":"",
        "role":"",
        "__v":0
    };
    loginStatus:boolean = false

    ngOnInit():void{
        this.token = localStorage.getItem('Token_Number');
        this.loginService.getUserInfo(this.token?this.token:'')
        .subscribe((res:UserRes) => {
            this.userInfo = res;
            this.loginStatus = true
        })
        
    }

    logoutUser():void{
        localStorage.removeItem('Token_Number');
        sessionStorage.removeItem('userResponse');
        localStorage.removeItem('Role_Type');
        this.loginStatus = false;
        this.router.navigate(['/']);
        window.location.reload();

    }
}