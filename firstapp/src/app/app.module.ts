import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'

///decorator
@NgModule({

    //All the component and pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
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