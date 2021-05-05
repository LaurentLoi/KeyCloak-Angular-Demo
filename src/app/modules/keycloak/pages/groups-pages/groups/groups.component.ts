import { Component, OnInit } from '@angular/core';
import {GroupsService} from '../../../services/groups.service';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groups$ = this.groupService.groups$;
  users$ = this.userService.users$;

  constructor(
    private groupService: GroupsService,
    private userService: UserService
  ) {
    this.groupService.loadAllGroups();
    this.userService.loadAllUsers();
  }

  async ngOnInit(): Promise<void> {
    console.log(await this.groups$.pipe(first()).toPromise());
  }

  addUserToGroup(groupName: string, groupId: string): void {
    const userId = (document.getElementById(groupName) as HTMLSelectElement).value;
    console.log(userId);
    this.groupService.addUserToGroupByIds(userId, groupId);
  }
}
