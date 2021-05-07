import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User, UserForm} from '../models/user.model';
import {USER_API_URL} from '../../../config/http-config';
import {filter} from 'rxjs/operators';
import {Group} from '../models/group.model';
import * as Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly users = new BehaviorSubject<User[]>(null);
  public readonly users$ = this.users.pipe(
    filter(users => !!users)
  );

  private readonly currentUser = new BehaviorSubject<Keycloak.KeycloakProfile>(null);
  public readonly currentUser$ = this.currentUser.pipe(
    filter(currentUser => !!currentUser)
  );

  currentUsername: string;
  currentUserRoles: string[];

  constructor(private httpClient: HttpClient) {
  }

  loadAllUsers(): void {
    this.getAllUsers().subscribe(users => {
      this.users.next(users);
    });
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(USER_API_URL);
  }

  getUserById(userId: string): Observable<User> {
    return this.httpClient.get<User>(USER_API_URL + '/' + userId);
  }

  getUserGroups(userId: string): Observable<Group[]> {
    return this.httpClient.get<Group[]>(USER_API_URL + '/' + userId + '/groups');
  }

  postNewUser(user: UserForm): void {
    this.httpClient.post(USER_API_URL, user, {
      observe: 'response', headers:
        {
          'Content-Type': 'application/json'
        }
    }).subscribe(response => {
      if (response.status === 201) {
        this.loadAllUsers();
      }
    }, error => {
      alert(error.error.errorMessage);
    });
  }

  deleteUser(userId: string): void {
    this.httpClient.delete(USER_API_URL + '/' + userId, {
      observe: 'response'
    }).subscribe(response => {
      if (response.status === 204) {
        this.loadAllUsers();
      }
    }, error => {
      alert(error.error.errorMessage);
    });
  }

  setCurrentUserRoles(roles: string[]): void {
    this.currentUserRoles = roles;
  }

  loadCurrentUserContext(user: Keycloak.KeycloakProfile): void {
    this.currentUser.next(user);
    this.currentUsername = user.username;
  }
}
