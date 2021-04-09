import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  returnAllEmployees()
  {
    return [
      {"name":"Abanoub Nabil" , "age":25},
      {"name":"Abanoub Magdy" , "age":24},
      {"name":"Gerges Abd elmalak" , "age":28},
      {"name":"Rewan Atef" , "age":23},
      {"name":"Salwa Ezz" , "age":22}
           ]
  }
}
