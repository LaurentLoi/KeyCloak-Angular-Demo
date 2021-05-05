import { Component, OnInit } from '@angular/core';
import {GroupsService} from '../../services/groups.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groups$ = this.groupService.groups$;

  constructor(
    private groupService: GroupsService
  ) {
    this.groupService.loadAllGroups();
  }

  async ngOnInit(): Promise<void> {
    console.log(await this.groups$.pipe(first()).toPromise());
  }

}
