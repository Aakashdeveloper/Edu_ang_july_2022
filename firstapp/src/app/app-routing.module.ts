import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ListingComponent } from './listing/listing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DeatilsComponent } from './deatils/deatils.component';
import { PlaceOrder } from './placeOrder/placeOrder.componet';
import { BookingComponent } from './view-booking/booking.component';
import { RegsiterFormsComponent } from './registerform/registerForm.component';
import { LoginFormsComponent } from './loginform/loginForm.component';

const routes: Routes = [
    { path:'login',component: LoginFormsComponent},
    { path:'register',component: RegsiterFormsComponent},
    { path:'viewBooking',component: BookingComponent},
    { path:'details', component: DeatilsComponent},
    { path:'order/:restName', component: PlaceOrder},
    { path:'listing/:id', component: ListingComponent},
    { path:'home', component: HomeComponent},
    { path:'', component: HomeComponent},
    { path:'**',pathMatch:'full', component: NotfoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers:[],
    exports:[RouterModule]
})

export class AppRoutingModule {}

