import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Group} from '../../models/group.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<User>;
  groups$: Observable<Group[]>;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.user$ = this.userService.getUserById(userId);
    this.groups$ = this.userService.getUserGroups(userId);
  }

}
