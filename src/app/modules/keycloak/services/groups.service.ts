import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Group} from '../models/group.model';
import {HttpClient} from '@angular/common/http';
import {GROUPS_API_URL} from '../../../config/http-config';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private readonly groups = new BehaviorSubject<Group[]>(null);
  public readonly groups$ = this.groups.pipe(
    filter(groups => !!groups)
  );

  constructor(private httpClient: HttpClient) {
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

  getGroupById(groupId: string): Observable<Group> {
    return this.httpClient.get<Group>(GROUPS_API_URL + '/' + groupId);
  }
}
