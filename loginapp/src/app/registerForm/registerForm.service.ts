import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class RegisterFormService {

    private regsiterUrl = "https://developerjwt.herokuapp.com/api/auth/register";

    constructor(private http: HttpClient) {}

    registerEmp(user:any[]):Observable<any[]>{
        return this.http.post<any[]>(this.regsiterUrl, user)
    }
}