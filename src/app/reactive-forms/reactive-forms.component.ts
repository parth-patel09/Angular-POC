import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomervalidationService } from '../services/customervalidation.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customeValidator: CustomervalidationService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      username: ['',[Validators.required], this.customeValidator.userNameValidator.bind(this.customeValidator)],
      password: ['',Validators.compose([Validators.required,this.customeValidator.patternValidator()])],
      confirmPassword: ['', Validators.required],
    },
      {
        validator: this.customeValidator.MatchPassword('password','confirmPassword'),
      }
      );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  OnSubmit() {
    this.submitted = true;
    if(this.registerForm.valid) {
      alert('Form Submitted successfully!!!\n Check the values in browser console only.');
      console.table(this.registerForm.value);
    }
  }

}
