import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './Home/Home.component';
import { QuickSearchComponent } from './Home/QuickSearch.component';
import { SearchComponent } from './Home/Search.component';
import { MyUpperPipe } from './pipes/myupper.pipe';
import { HomeService } from './services/Home.service';
import { ListingComponent } from './listing/listing.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';

///decorator
@NgModule({

    //All the component and pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        QuickSearchComponent,
        SearchComponent,
        MyUpperPipe,
        ListingComponent,
        NotfoundComponent
    ],

    //all the modules
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],

    // all the services
    providers: [
        HomeService
    ],

    // only and only main components
    bootstrap:[
        AppComponent
    ]
})


export class AppModule{}