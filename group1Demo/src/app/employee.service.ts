import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { EmployeeController } from 'src/APIs/EmployeeController';
import { IEmployee } from './IEmployee';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  url='/assets/Data/employees.json';
  fakeUrl=EmployeeController.GetAll;

  returnAllEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }
}
