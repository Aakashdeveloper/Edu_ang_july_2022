import { Component, OnInit } from '@angular/core'
import { IMeal } from '../models/meal.model';
import { HomeService } from '../services/Home.service';

@Component({
    selector: 'app-quick',
    templateUrl: './QuickSearch.component.html',
    styleUrls: ['./QuickSearch.component.css']
})

export class QuickSearchComponent implements OnInit{
    imgUrl: String = "../../assets/images/food-tile.png";
    price: number = 10;
    opened = Date.now()
    mealType:IMeal[]=[]

    // user for declarations
    constructor(private homeService:HomeService){
      console.log("I am in constructor")
    }

    // to excaute first in order
    ngOnInit(): void {
      console.log("I am in ngOnInit")
      this.homeService.getMeal()
        .subscribe((data:IMeal[]) => this.mealType = data)
    }
}