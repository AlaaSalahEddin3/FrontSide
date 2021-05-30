import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/Services/Firebase/auth.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: any;
  loading = false;
  submitted = false;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: LoginService,
      private auth:AuthService
  ) { 
      
  }

  ngOnInit() {
      //redirect to home if already logged in
      if (this.authenticationService.isLoggedIn()) { 
        this.router.navigate(['/']);
        }
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

    
  }

  // convenience getter for easy access to form fields
  get formFields() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
this.auth.SignIn(this.formFields.username.value,this.formFields.password.value);
      this.loading = true;
      this.authenticationService.login(this.formFields.username.value, this.formFields.password.value)
          .pipe(first())
          .subscribe(
              data => {
                localStorage.setItem("username",this.formFields.username.value);
                  this.router.navigate(['/home']);
              },
              error => {
                  this.error = error.message;
                  this.loading = false;
              });
  }


}
