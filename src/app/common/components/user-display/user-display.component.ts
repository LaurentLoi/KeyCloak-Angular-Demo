import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../../modules/keycloak/models/user.model';
import {UserService} from '../../../modules/keycloak/services/user.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {

  @Input() userId: string;

  user$: Observable<User>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.userId) {
      this.user$ = this.userService.getUserById(this.userId);
    }
  }

}
