import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegsiterFormsComponent } from './registerForm/registerForm.component';
import { UserListComponent } from './userlist/userList.component';


const routes: Routes = [
  {path:'users',component: UserListComponent},
  {path:'register',component: RegsiterFormsComponent},
  {path:'',component: RegsiterFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
