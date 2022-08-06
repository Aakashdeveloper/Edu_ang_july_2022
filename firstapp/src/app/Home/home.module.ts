import { NgModule } from "@angular/core";
import { HomeComponent } from "./Home.component";
import { QuickSearchComponent } from "./QuickSearch.component";
import { SearchComponent } from "./Search.component";
import { HomeService } from "../services/Home.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        HomeComponent,
        QuickSearchComponent,
        SearchComponent,
    ],
    imports: [
        SharedModule
    ],
    providers: [
        HomeService
    ]
})

export class HomeModule {}