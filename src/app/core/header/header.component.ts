import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigateModel } from './navigate-model';
import { AuthService } from '../../_shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;

  navItems: NavigateModel[] = [
    {
      displayName: 'Events',
      route: '/events',
      disable: true
    },
    {
      displayName: 'Users',
      route: '/users',
      disable: this.isAuthenticated
    }
  ];

  authItems: NavigateModel[] = [
    {
      displayName: 'Login',
      route: '/login'
    },
    {
      displayName: 'Register',
      route: '/register'
    }
  ];

  constructor(private _router: Router,
              private _authService: AuthService) {
    this.isAuthenticated = _authService.loggedIn();
  }

  ngOnInit() {
  }

  routePage(page: string) {
    this._router.navigate([page]);
  }

}
