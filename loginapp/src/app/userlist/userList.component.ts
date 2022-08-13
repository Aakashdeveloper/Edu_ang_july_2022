import { Component, OnInit} from '@angular/core';
import { UserService } from './userList.service';

@Component({
    templateUrl:'./userList.component.html'
})

export class UserListComponent implements OnInit {
    userList:any[] = [];
    constructor(private users:UserService) {}

    ngOnInit():void{
        this.users.userList()
            .subscribe((res:any[]) => this.userList = res)
    }
}