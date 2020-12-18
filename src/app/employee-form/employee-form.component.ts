import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee;

  constructor(
    private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) {
    this.employee = new Employee();
  }
  ngOnInit(): void {
   }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.employeeService.save(this.employee).subscribe(result => this.gotoEmployeeList());
  }

  // tslint:disable-next-line:typedef
  gotoEmployeeList() {
    this.router.navigate(['/employees']);
  }


}
