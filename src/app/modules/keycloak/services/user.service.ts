import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {USER_API_URL} from '../../../config/http-config';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly users = new BehaviorSubject<User[]>(null);
  public readonly users$ = this.users.pipe(
    filter(users => !!users)
  );

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
    return this.httpClient.get<User>(USER_API_URL + userId);
  }


}
