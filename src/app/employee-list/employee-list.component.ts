import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  employeesUnicite: string[] = ['firstName', 'lastName', 'mail', 'role', 'recruitmentDate'];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    });
  }


}
