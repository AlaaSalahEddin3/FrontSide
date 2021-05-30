import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/Services/Firebase/auth.service';
import { FireBaseService } from 'src/app/Services/Firebase/fire-base.service';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 registerForm: any;
  loading = false;
  submitted = false;
  error = '';
  genderList = ["male", "female"]
  constructor
    (private formBuilder: FormBuilder,
      private _route: ActivatedRoute,
      private _router: Router,
      private _registerService:RegisterService,
      private firebase:FireBaseService,
      private auth:AuthService
    )
     { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      birthDate:['',Validators.required],
      gender: ['', Validators.required],
      phone:['',Validators.required],
      address:['',Validators.required]
    });
  }

  get formFields() { return this.registerForm.controls; }
  successMessage:any;
  errorMessage:any;
 async onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    let newUser: User = {
      id:"",
      userName: this.formFields.username.value,
      passwordHash: this.formFields.password.value,
      email: this.formFields.email.value,
      gender: this.formFields.gender.value,
      birthDate:this.formFields.birthDate.value,
      phoneNumber:this.formFields.phone.value,
   address:this.formFields.address.value
    }

   //this for writing user data into firebase
  
    
    this._registerService.addNewUser(newUser)
      .pipe(first())
      .subscribe(
        data => {
         // localStorage.setItem('user',JSON.stringify(newUser));
          this._router.navigate(["/login"]);
        },
        error => {
          this.error = error.message;
          console.log(error);
        //  alert('aaaaaaaaaaaaaaaaa');
          this.loading = false;
        });
        this.firebase.exampleCreate(newUser); 
          this.auth.doRegister(newUser)
    .then(res => {

      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
      console.log(this.errorMessage)
      
    })
  }
}
