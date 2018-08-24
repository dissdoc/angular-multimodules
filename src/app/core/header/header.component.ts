import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigateModel } from './navigate-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems: NavigateModel[] = [
    {
      displayName: 'Events',
      route: '/events'
    },
    {
      displayName: 'Users',
      route: '/users'
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

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  routePage(page: string) {
    this._router.navigate([page]);
  }

}
