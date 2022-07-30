import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './Home/Home.component';
import { QuickSearchComponent } from './Home/QuickSearch.component';
import { SearchComponent } from './Home/Search.component';
import { MyUpperPipe } from './pipes/myupper.pipe';

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
        MyUpperPipe
    ],

    //all the modules
    imports: [
        BrowserModule
    ],

    // all the services
    providers: [],

    // only and only main components
    bootstrap:[
        AppComponent
    ]
})


export class AppModule{}