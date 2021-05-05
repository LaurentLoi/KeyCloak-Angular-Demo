import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {USER_API_URL} from '../../../config/http-config';
import {filter} from 'rxjs/operators';
import {Group} from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly users = new BehaviorSubject<User[]>(null);
  public readonly users$ = this.users.pipe(
    filter(users => !!users)
  );

  currentUserRoles: string[];

  constructor(private httpClient: HttpClient) {
  }

  loadAllUsers(): void {
    this.getAllUsers().subscribe(users => {
      this.users.next(users);
      console.log('USERS LOADED');
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

  setCurrentUserRoles(roles: string[]): void {
    this.currentUserRoles = roles;
  }

}
