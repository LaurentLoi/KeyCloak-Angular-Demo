import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Group} from '../models/group.model';
import {HttpClient} from '@angular/common/http';
import {GROUPS_API_URL, USER_API_URL} from '../../../config/http-config';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private readonly groups = new BehaviorSubject<Group[]>(null);
  public readonly groups$ = this.groups.pipe(
    filter(groups => !!groups)
  );

  private readonly group = new BehaviorSubject<Group>(null);
  public readonly group$ = this.group.pipe(
    filter(group => !!group)
  );

  private readonly groupMembers = new BehaviorSubject<User[]>(null);
  public readonly groupMembers$ = this.groupMembers.pipe(
    filter(groupMembers => !!groupMembers)
  );

  constructor(
    private httpClient: HttpClient
  ) {
  }

  loadAllGroups(): void {
    this.getAllGroups().subscribe(groups => {
      this.groups.next(groups);
      console.log('GROUPS LOADED');
    });
  }

  getAllGroups(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(GROUPS_API_URL);
  }

  loadGroupById(groupId: string): void {
    this.getGroupById(groupId).subscribe(group => {
      this.group.next(group);
    });
  }

  getGroupById(groupId: string): Observable<Group> {
    return this.httpClient.get<Group>(GROUPS_API_URL + '/' + groupId);
  }

  loadGroupMembers(groupId: string): void {
    this.getGroupMembers(groupId).subscribe(groupMembers => {
      this.groupMembers.next(groupMembers);
    });
  }

  getGroupMembers(groupId: string): Observable<User[]> {
    return this.httpClient.get<User[]>(GROUPS_API_URL + '/' + groupId + '/members');
  }

  addUserToGroupByIds(userId: string, groupId: string): void {
    this.httpClient.put<any>(USER_API_URL + '/' + userId + '/groups/' + groupId, null, {
      observe: 'body'
    }).subscribe(body => {
    }, error => {
      alert(error.error.errorMessage);
    });
  }

  deleteUserFromGroupByIds(userId: string, groupId: string): void {
    this.httpClient.delete<any>(USER_API_URL + '/' + userId + '/groups/' + groupId, {
      observe: 'response'
    }).subscribe(response => {
      console.log(response.status);
      if (response.status === 204) {
        this.loadGroupMembers(groupId);
      }
    }, error => {
      alert(error.error.errorMessage);
    });
  }
}
