import {Component, Input, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = {name: '', email: '', phone: 0};

  constructor(private router: Router, private restApiService: RestApiService) { }

  ngOnInit() {
  }

  addEmployee(dataEmployee) {
    this.restApiService.createEmployee(this.employeeDetails).subscribe(
      (data: {}) => {
        this.router.navigate(['/employees-list']);
      }
    );
  }

}
