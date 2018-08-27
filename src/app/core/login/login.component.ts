import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = {
    name: '',
    password: ''
  };

  loginGroup: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.loginGroup = _fb.group({
      name: [this.loginModel.name, Validators.required],
      password: [this.loginModel.password, Validators.required]
    });
  }

  ngOnInit() {
    // Тут ставится некий чекбок для того стоит проверять или не стоит проверять по длине
    // this.loginGroup.get('validate').valueChanges.subscribe(
    //   (validate) => {
    //     if (validate == '1') {
    //       this.loginGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
    //       this.titleAlert = "You need to specify at least 3 characters";
    //     } else {
    //       this.loginGroup.get('name').setValidators(Validators.required);
    //     }
    //     this.loginGroup.get('name').updateValueAndValidity();
    //   }
    // )
  }

  login(form) {
    this.loginModel.name = form.name;
    this.loginModel.password = form.password;
  }

}
