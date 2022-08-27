import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from './placeOrder.model';
import { OrderService } from '../services/Order.service';

@Component({
    selector:'app-placeorder',
    templateUrl: './placeOrder.component.html'
})

export class PlaceOrder {

    constructor(private router: Router, 
                private route:ActivatedRoute,
                private orderService:OrderService){}

    url:string= ''
    id:number = Math.floor(Math.random() * 100000)
    restName:string = this.route.snapshot.params['restName'];
    userInfo:string|null = sessionStorage.getItem('userResponse');

    name = this.userInfo?this.userInfo.split(',')[1]:'';
    email = this.userInfo?this.userInfo.split(',')[2]:'';
    phone = this.userInfo?this.userInfo.split(',')[3]:'';
    
    myOrder = new IOrder(this.name,this.email,'Jw23',Number(this.phone),344,this.id,this.restName)
    
    submitForm(Form: NgForm):void{
        console.log(Form.value)
        this.orderService.postOrder(Form.value)
        .subscribe((res:any[])=> {console.log('Order Placed')})
        this.url='http://localhost:4000/paynow?amount='+Form.value.cost+'&orderId='+Form.value.id+'&email='+Form.value.email+'&phone='+Form.value.phone
    }
}