import { Component, OnInit } from '@angular/core';

import { UserModel } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  users: UserModel[];

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this._usersService.getUsers()
      .subscribe(users => this.users = users);
  }

}
