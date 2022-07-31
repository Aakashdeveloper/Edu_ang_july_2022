import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
    mealId: string = '1';

    constructor(private route:ActivatedRoute) {}

    ngOnInit(){
        this.mealId = this.route.snapshot.params['id'];
        sessionStorage.setItem('mealId', this.mealId);
    }
}