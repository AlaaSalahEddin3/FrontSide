import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from  "@angular/fire/auth";
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }
  doRegister(value:any){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.passwordHash)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }
  SignOut() {
    this.afAuth
    
    .signOut();
    }
  SignIn(email: string, password: string) {
   firebase.auth()
    
    .signInWithEmailAndPassword(email, password)
    .then(res => {
    console.log('You are Successfully logged in !');
    })
    .catch(err => {
    console.log('Something is wrong:',err.message);
    });
    }
}
