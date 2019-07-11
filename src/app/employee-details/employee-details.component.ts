import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: any = {};
  id = +this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private restApiService: RestApiService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.restApiService.getEmployee(this.id).subscribe(
      (data: {} ) => { this.employee = data; }
    );
  }

  onBack(){
    this.router.navigate(['/employees-list']);
  }


}
