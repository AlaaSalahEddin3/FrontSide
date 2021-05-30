import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {


  loginForm: any;
  loading = false;
  submitted = false;
  returnUrl: string='';
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: LoginService
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

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get formFields() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.updatePassword(this.formFields.username.value, this.formFields.password.value)
          .pipe(first())
          .subscribe(
              data => {
                localStorage.setItem("username",this.formFields.username.value);
                  this.router.navigate(['/home']);
                  alert("Password Updated Successfully");
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }

}
