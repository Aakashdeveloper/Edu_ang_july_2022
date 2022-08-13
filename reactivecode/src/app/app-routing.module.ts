import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employeeForm/employee.component';


const routes: Routes = [
  {path:'form', component: EmployeeComponent},
  {path:'', redirectTo: 'form', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
