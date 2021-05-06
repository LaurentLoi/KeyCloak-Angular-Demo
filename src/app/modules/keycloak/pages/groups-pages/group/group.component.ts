import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../../services/groups.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  group$ = this.groupService.group$;
  groupMembers$ = this.groupService.groupMembers$;
  groupId: string;

  constructor(
    private groupService: GroupsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.groupId = this.activatedRoute.snapshot.paramMap.get('id');
    this.groupService.loadGroupById(this.groupId);
    this.groupService.loadGroupMembers(this.groupId);
  }

  deleteUserFromGroup(userId: string, groupId: string): void {
    this.groupService.deleteUserFromGroupByIds(userId, groupId);
  }

}
