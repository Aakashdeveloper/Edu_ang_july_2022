import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRes, UserRes } from '../loginform/loginForm.model'

@Injectable()

export class LoginFormService {

    private baseUrl = "https://developerjwt.herokuapp.com/api/auth";


    constructor(private http: HttpClient) {}

    loginEmp(user:LoginRes):Observable<LoginRes>{
        return this.http.post<LoginRes>(`${this.baseUrl}/login`, user)
    }

    getUserInfo(token:string):Observable<UserRes>{
        localStorage.setItem('Token_Number',token);
        return this.http.get<UserRes>(`${this.baseUrl}/userinfo`,{headers:{'x-access-token':token}})
    }
}