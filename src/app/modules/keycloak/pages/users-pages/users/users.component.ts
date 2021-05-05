import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  currentUsername = this.userService.currentUsername;
  users$ = this.userService.users$;

  constructor(private userService: UserService) {
    this.userService.loadAllUsers();
  }

  ngOnInit(): void {
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId);
  }
}
