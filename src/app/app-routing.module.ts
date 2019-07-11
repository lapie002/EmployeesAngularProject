import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from "./employee-create/employee-create.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeUpdateComponent } from "./employee-update/employee-update.component";
import { EmployeesListComponent } from "./employees-list/employees-list.component";

const routes: Routes = [
  { path:'create-employee', component: EmployeeCreateComponent },
  { path:'employee-details/:id', component: EmployeeDetailsComponent },
  { path:'update-employee/:id', component: EmployeeUpdateComponent },
  { path:'employees-list', component: EmployeesListComponent },
  { path:'', pathMatch:'full', redirectTo:'create-employee' },
  { path: '**', redirectTo: 'create-employee' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
