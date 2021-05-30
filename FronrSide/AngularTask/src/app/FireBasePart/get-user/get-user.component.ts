import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/Models/User';
import { FireBaseService } from 'src/app/Services/Firebase/fire-base.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  constructor(private firestore:AngularFirestore) { }
user:any
flag:boolean=false;
  ngOnInit(): void {
  }
  message:any
  find(uid:any)
  {
    this.flag=true;
    alert(uid);
    if (uid<=0) {
    this.message = 'Cannot be empty';
    this.user = null;
  } else {
    this.firestore.collection('Users',ref => ref.where("userName","==",uid)).get()
      .subscribe(ss => {
        if (ss.docs.length === 0) {
        
          this.message = 'Document not found! Try again!';
          this.user = null;
        } else {
          
          ss.docs.forEach(doc => {
            this.message = '';
            this.user = doc.data();
            console.log(this.user);
          })
        }
      })
  }
  };
    
   }
  

