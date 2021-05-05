import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './root/index/index.component';
import {RootComponent} from './root/root.component';
import {AuthGuard} from './modules/keycloak/guards/auth.guard';
import {CatComponent} from './pages/cats/cat.component';
import {E403Component} from './common/errors/e403/e403.component';
import {UsersComponent} from './modules/keycloak/pages/users/users.component';
import {UserComponent} from './modules/keycloak/pages/user/user.component';
import {GroupsComponent} from './modules/keycloak/pages/groups/groups.component';
import {GroupComponent} from './modules/keycloak/pages/group/group.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    canActivate: [AuthGuard],
    data: {roles: ['user']},
    children: [
      {
        path: 'index',
        component: IndexComponent,
        canActivate: [AuthGuard],
        data: {roles: ['user']}
      },
      {
        path: 'cats',
        component: CatComponent,
        canActivate: [AuthGuard],
        data: {roles: ['user']}
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard],
        data: {roles: ['admin']}
      },
      {
        path: 'users/:id',
        component: UserComponent,
        canActivate: [AuthGuard],
        data: {roles: ['manager']}
      },
      {
        path: 'groups',
        component: GroupsComponent,
        canActivate: [AuthGuard],
        data: {roles: ['manager']}
      },
      {
        path: 'groups/:id',
        component: GroupComponent,
        canActivate: [AuthGuard],
        data: {roles: ['manager']}
      },
      {
        path: 'unauthorized',
        component: E403Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
