import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  Employees: {} = [];

  constructor(private restApiService: RestApiService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  // Get employees list
  loadEmployees() {
    return this.restApiService.getEmployees().subscribe(
      (data: {} ) => { this.Employees = data; }
    );
  }

  // Delete employee
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete ?')){
      return this.restApiService.deleteEmployee(id).subscribe(
        data => { this.loadEmployees(); }
      );
   }
 }
}
