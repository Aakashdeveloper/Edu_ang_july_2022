import { Component, OnInit } from '@angular/core'
import { IMeal } from '../models/meal.model';
import { HomeService } from '../services/Home.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
    selector: 'app-quick',
    templateUrl: './QuickSearch.component.html',
    styleUrls: ['./QuickSearch.component.css'],
    animations: [
      trigger('openClose', [
        state('open', style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow'
        })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),]
})

export class QuickSearchComponent implements OnInit{
    imgUrl: String = "../../assets/images/food-tile.png";
    price: number = 10;
    opened = Date.now()
    mealType:IMeal[]=[]
    isOpen = true;

    toggle() {
      this.isOpen = !this.isOpen;
    }

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