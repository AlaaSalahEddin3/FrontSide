import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { User } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private firestore: AngularFirestore) { }
counter:number=1;

  exampleCreate(data:any){ 
    data.id=this.counter;
    return new Promise<any>((resolve, reject) => { 
       this.firestore
           .collection("Users")
           .add(data)
           .then(
               res => {
                // alert("Hello");
                this.counter++;
               }, 
               err => reject(err)
           )
    }
 )}
}
