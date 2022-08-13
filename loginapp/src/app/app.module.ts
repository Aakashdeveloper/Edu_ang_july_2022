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

@NgModule({
  declarations: [
    AppComponent,
    RegsiterFormsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RegisterFormService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
