import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.signUpForm = new FormControl();
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8),
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/\W|_/, { hasSpecialCharacters: true })
       ]]
    });
  }
  onSubmit() {
    console.log('Valid?', this.signUpForm.valid); // true or false
    console.log('Name', this.signUpForm.value.name);
    console.log('Email', this.signUpForm.value.email);
    console.log(this.signUpForm.get("password").errors);
  }
  isPasswordUppercaseLetterNeeded(){
    return this.signUpForm.get("password").hasError("hasCapitalCase");
  }
  isPasswordSpecialCharNeeded(){
    return this.signUpForm.get("password").hasError("hasSpecialCharacters");
  }
  isPasswordNumberNeeded(){
    return this.signUpForm.get("password").hasError("hasNumber");  
  }
}
