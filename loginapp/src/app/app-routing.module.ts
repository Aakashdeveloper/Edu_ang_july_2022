import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegsiterFormsComponent } from './registerForm/registerForm.component';
import { UserListComponent } from './userlist/userList.component';
import { LoginFormsComponent } from './loginForm/loginForm.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileGaurdService } from './gaurds/profilegaurd.service';
import { UserGaurdService } from './gaurds/usergaurd.service';


const routes: Routes = [
  {path:'users',canActivate:[UserGaurdService],component: UserListComponent},
  {path:'login',component: LoginFormsComponent},
  {path:'profile',canActivate:[ProfileGaurdService],component: ProfileComponent},
  {path:'register',component: RegsiterFormsComponent},
  {path:'',component: RegsiterFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProfileGaurdService,
    UserGaurdService
  ]
})
export class AppRoutingModule { }
