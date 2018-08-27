import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ValidatorFn} from '@angular/forms';

import { RegisterModel } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerModel: RegisterModel = {
    name: '',
    password: ''
  };

  registerForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.registerForm = _fb.group({
      name: [this.registerModel.name, Validators.required],
      password: _fb.group({
        pwd: ['', Validators.required],
        confirm: ['', Validators.required]
      }, {validator: this._passwordsAreEqual()})
    });
  }

  ngOnInit() {
  }

  register() {
    console.log(this.registerModel);
  }

  private _passwordsAreEqual(): ValidatorFn {
    return (group: FormGroup): {[key: string]: any} => {
      if (!(group.dirty || group.touched) || group.get('pwd').value === group.get('confirm').value) {
        return null;
      } else {
        return {custom: 'Passwords are not equal'};
      }
    };
  }

}
