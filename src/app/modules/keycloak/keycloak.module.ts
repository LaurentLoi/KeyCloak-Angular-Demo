import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users-pages/users/users.component';
import { UserComponent } from './pages/users-pages/user/user.component';
import { GroupsComponent } from './pages/groups-pages/groups/groups.component';
import { GroupComponent } from './pages/groups-pages/group/group.component';
import {RouterModule} from '@angular/router';
import { AddUserComponent } from './pages/users-pages/add-user/add-user.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    GroupsComponent,
    GroupComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class KeycloakModule { }
