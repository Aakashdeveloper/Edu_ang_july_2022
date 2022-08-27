import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './Home/home.module';
import { ListingModule } from './listing/listing.module';
import { DeatilsComponent } from './deatils/deatils.component';
import { DetailsService } from './services/Details.service';
import { PlaceOrder } from './placeOrder/placeOrder.componet';
import { OrderService } from './services/Order.service';
import { BookingComponent } from './view-booking/booking.component';
import { RegsiterFormsComponent } from './registerform/registerForm.component';
import { LoginFormsComponent } from './loginform/loginForm.component';
import { RegisterFormService } from './services/registerForm.service';
import { LoginFormService } from './services/loginForm.service';

///decorator
@NgModule({

    //All the component and pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NotfoundComponent,
        DeatilsComponent,
        PlaceOrder,
        BookingComponent,
        RegsiterFormsComponent,
        LoginFormsComponent
    ],

    //all the modules
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        HomeModule,
        ListingModule
    ],

    // all the services
    providers: [
        DetailsService,
        OrderService,
        LoginFormService,
        RegisterFormService
    ],
    // only and only main components
    bootstrap:[
        AppComponent
    ]
})


export class AppModule{}