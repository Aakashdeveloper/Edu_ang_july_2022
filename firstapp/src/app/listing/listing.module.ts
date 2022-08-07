import { NgModule } from "@angular/core";
import { ListingComponent } from "./listing.component";
import { RestSearchPipe } from "../pipes/search.pipe";
import { CuisineFilterComponent } from "../filters/cuisineFilter.component";
import { ListingService } from "../services/listing.service";
import { SharedModule } from "../shared/shared.module";
import { CostFilterComponent } from "../filters/costFilter.component";

@NgModule({
    declarations: [
        ListingComponent,
        RestSearchPipe,
        CuisineFilterComponent,
        CostFilterComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        ListingService
    ]
})

export class ListingModule {}