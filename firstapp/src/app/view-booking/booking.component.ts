import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../services/Order.service';

@Component({
    templateUrl: './booking.component.html',
    styleUrls:['./booking.component.css']
})

export class BookingComponent implements OnInit {

    constructor(private orderService:OrderService,
        private route: ActivatedRoute) {}

    
    orders:any[] = [];
    id:string|null = '';
    status:string|null='';
    date:string|null='';
    bank:string|null=''
    userInfo:string|null = sessionStorage.getItem('userResponse');
    email = this.userInfo?this.userInfo.split(',')[2]:''

    ngOnInit():void{
        
        this.id = this.route.snapshot.queryParamMap.get('ORDERID');
        this.id = this.id ? this.id :''
        this.status = this.route.snapshot.queryParamMap.get('status');
        this.status = this.status ? this.status :''
        this.date = this.route.snapshot.queryParamMap.get('date');
        this.date = this.date ? this.date :''
        this.bank = this.route.snapshot.queryParamMap.get('bank');
        this.bank = this.bank ? this.bank :''


        this.orderService.updateOder(this.id,this.status,this.date,this.bank)
            .subscribe((data:any[]) => {
                console.log('okk')
            })

        this.orderService.getOrder(this.email)
        .subscribe((data:any[]) => {
            this.orders=data
        })
    }
}