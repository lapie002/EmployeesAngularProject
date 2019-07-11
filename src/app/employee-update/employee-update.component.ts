import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employee: any = {};
  id = +this.activatedRoute.snapshot.paramMap.get('id');


  constructor(private restApiService: RestApiService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.restApiService.getEmployee(this.id).subscribe(
      (data: {} ) => { this.employee = data; }
    );
  }
  // Update employee data
  updateEmployee() {
    if (window.confirm('Are you sure, you want to update ?')){
      this.restApiService.updateEmployee(this.id, this.employee).subscribe(
        data => { this.router.navigate(['/employees-list']); }
      );
    }
  }

}
