import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ = this.userService.users$;

  constructor(private userService: UserService) {
    this.userService.loadAllUsers();
  }

  async ngOnInit(): Promise<void> {
    console.log(await this.users$.pipe(first()).toPromise());
  }

}
