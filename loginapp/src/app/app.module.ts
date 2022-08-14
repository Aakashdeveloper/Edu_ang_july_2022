import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegsiterFormsComponent } from './registerForm/registerForm.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterFormService } from './registerForm/registerForm.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './userlist/userList.service';
import { UserListComponent } from './userlist/userList.component';
import { LoginFormService } from './loginForm/loginForm.service';
import { LoginFormsComponent } from './loginForm/loginForm.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegsiterFormsComponent,
    UserListComponent,
    LoginFormsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RegisterFormService,
    UserService,
    LoginFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
