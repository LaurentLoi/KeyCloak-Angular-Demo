import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupsService} from '../../../services/groups.service';
import {Observable} from 'rxjs';
import {Group} from '../../../models/group.model';
import {UserService} from '../../../services/user.service';
import {UserForm} from '../../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;
  groups$: Observable<Group[]>;

  constructor(private builder: FormBuilder,
              private groupsService: GroupsService,
              private userService: UserService) {
    this.addUserForm = this.builder.group({
      first_name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      // last_name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      role: ['', Validators.required],
      // status: ['', Validators.required], // === user.position
      // managerId: ['']
    });
  }

  ngOnInit(): void {
    this.groupsService.loadAllGroups();
    this.groups$ = this.groupsService.groups$;
  }

  addNewUser(): void {
    const adminGroupId = 'admins';
    const managerGroupId = 'managers';
    const userGroupId = 'users';
    const userGroups = [];
    const password = 'a';

    const group = this.addUserForm.get('role').value;

    switch (group) {
      case 'admins':
        userGroups.push(adminGroupId, managerGroupId, userGroupId);
        break;
      case 'managers':
        userGroups.push(managerGroupId, userGroupId);
        break;
      case 'users':
        userGroups.push(userGroupId);
        break;
    }

    const newUser: UserForm = {
      username: this.addUserForm.get('first_name').value,
      enabled: true,
      emailVerified: true,
      email: this.addUserForm.get('email').value,
      groups: userGroups,
      credentials: [{
        type: 'password',
        value: password,
        temporary: false
      }]
    };
    console.log(newUser);
    this.userService.postNewUser(newUser);
  }

}
