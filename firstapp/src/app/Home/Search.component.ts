import { Component, OnInit } from '@angular/core';
import { ICity } from '../models/location.model';
import { IRest } from '../models/rest.model';
import { HomeService } from '../services/Home.service';

@Component({
    selector: 'app-search',
    templateUrl: './Search.component.html',
    styleUrls: ['./Search.component.css']
})

export class SearchComponent implements OnInit {
    title: String = 'Find Best Place Near You';
    keyword: String = 'Test Data';
    locationData:ICity[] = []
    restaurants: IRest[] = []

    // user for declarations
    constructor(private homeService:HomeService){
      console.log("I am in constructor")
    }

    // to excaute first in order
    ngOnInit(): void {
      console.log("I am in ngOnInit")
      this.homeService.getCity()
        .subscribe((data:ICity[]) => this.locationData = data)
    }

   
    handleCity(event:Event){
      console.log((event.target as HTMLInputElement).value)
      let stateId = Number((event.target as HTMLInputElement).value)
      this.homeService.getRwrtC(stateId)
        .subscribe((data:IRest[]) => this.restaurants = data)
    }
}

