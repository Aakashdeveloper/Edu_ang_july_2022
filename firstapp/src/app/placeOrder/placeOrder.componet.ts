import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from './placeOrder.model';

@Component({
    selector:'app-placeorder',
    templateUrl: './placeOrder.component.html'
})

export class PlaceOrder {

    constructor(private router: Router, private route:ActivatedRoute){}

    url:string= ''
    id:number = Math.floor(Math.random() * 100000)
    restName:string = this.route.snapshot.params['restName']
    
    myOrder = new IOrder('Amit','Amit@gmail.com','Jw23',12345678,344,this.id,this.restName)
    
    submitForm(Form: NgForm):void{
        console.log(Form.value)
        this.url='http://localhost:4000/paynow?amount='+Form.value.cost+'&orderId='+Form.value.id+'&email='+Form.value.email+'&phone='+Form.value.phone
    }
}