import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { GroupsComponent } from './pages/groups/groups.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    GroupsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KeycloakModule { }
