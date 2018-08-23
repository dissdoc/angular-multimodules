import { Component, OnInit } from '@angular/core';

import { NavigateModel } from './navigate-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems: NavigateModel[] = [
    {
      displayName: 'item 1'
    },
    {
      displayName: 'item 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
