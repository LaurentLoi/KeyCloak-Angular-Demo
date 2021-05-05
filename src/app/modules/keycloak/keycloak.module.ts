import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupComponent } from './pages/group/group.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    GroupsComponent,
    GroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class KeycloakModule { }
