import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/Models/User';
import { FireBaseService } from 'src/app/Services/Firebase/fire-base.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  constructor(private firebase:FireBaseService,private firestore:AngularFirestore) { }
     AllUsers:any=[];
   ngOnInit(): void {
    this.firestore
    .collection("Users")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
       // console.log(doc.data);
        
        this.AllUsers.push(doc.data());
      });
    });
 //   console.log(this.AllUsers);
  }

}
