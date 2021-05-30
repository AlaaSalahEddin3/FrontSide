import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../Models/User';
import { catchError } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from  "@angular/fire/auth";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl:string='http://localhost:48117';
  constructor(private _http: HttpClient,private auth:AngularFirestore,afauth:AngularFireAuth) { }

  getAllAccounts(): Observable<User[]> {
    let url = this.apiUrl+'/api/account ';
    return this._http.get<User[]>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }

  getUserById(id: string): Observable<User> {
    let url = this.apiUrl+'/api/account/${id}';
    return this._http.get<User>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }

  addNewUser(newUser: User): Observable<any> {
    
    let url = this.apiUrl+'/Register';
    return this._http.post<User>(url, newUser)
      .pipe(catchError((err) => {
       //return err.message;
     console.log('Error Happend');
       //console.log(err);
        return throwError(err.message);
      }
      ));
  }

}
