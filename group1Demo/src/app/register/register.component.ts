import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../customValidators/confirmPassword.validator';
import { ForbiddenNameValidator } from '../customValidators/userName.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
//Form model
  // registerForm=new FormGroup({
  //   userName :new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),

  //   address:new FormGroup({
  //     state:new FormControl(''),
  //     city:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // })

  registerForm=this.fb.group({
    userName :['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/user/)]],
    password:[''],
    confirmPassword:[''],
    email:[''],
    subscribe:[false],
    alternativeEmails:this.fb.array([]),
    address:this.fb.group({
      state:[''],
      city:[''],
      postalCode:[true]
    })
  },{validators:[ConfirmPasswordValidator]})

  get userName ()
  {
    return this.registerForm.get('userName');
  }
  get email()
  {
    return this.registerForm.get('email');

  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    //this.userName=this.registerForm.get('adas');
  }

  get alternativeEmails ()
  {
    return this.registerForm.get('alternativeEmails') as FormArray;
  }

  removeEmail(controlIndex)
  {
    this.alternativeEmails.removeAt(controlIndex);
  }

  addNewEmail()
  {
    this.alternativeEmails.push(this.fb.control(''))
  }

  setEmailToRequired()
  {
    this.registerForm.get('subscribe').valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
          //set validation
          const email=this.registerForm.get('email');
          email.setValidators(Validators.required);
      }
      else
      {
          //clear validation
          this.email.clearValidators();
      }
      this.email.updateValueAndValidity();
    })
  }
  bindData()
  {
    //  this.registerForm.setValue({
    //    userName:'ITI',
    //    password:'123',
    //    confirmPassword:'123',
    //    address:{
    //      state:'USA',
    //      city:'OHIO',
    //      postalCode:'32146'
    //    }
    //  })
    this.registerForm.patchValue({
      userName:'ITI',
      // password:'123',
      // confirmPassword:'123',
      address:{
        state:'USA',
        city:'OHIO',
        postalCode:'32146'
      }
    })
  }

}
