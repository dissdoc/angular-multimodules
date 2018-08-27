import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import { LoginModel } from './login.model';
import { AuthService } from '../../_shared/auth.service';

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

  constructor(private _fb: FormBuilder,
              private _authService: AuthService,
              private _router: Router) {
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

    this._authService.login(this.loginModel).subscribe(() => this._router.navigate(['/users']));
  }

}
