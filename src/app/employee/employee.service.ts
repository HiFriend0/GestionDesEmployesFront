import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private employeesUrl: string;

  constructor(private http: HttpClient) {
    this.employeesUrl = 'http://localhost:8080/employees';
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  // tslint:disable-next-line:typedef
  public save(employee: Employee) {
    return this.http.post<Employee>(this.employeesUrl, employee);
  }
}
