import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';

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
