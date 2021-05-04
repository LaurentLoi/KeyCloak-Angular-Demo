import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CAT_API_URL} from '../../config/http-config';
import {Cat} from '../../common/models/cat.model';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private readonly cats = new BehaviorSubject<Cat[]>(null);
  public readonly cats$ = this.cats.pipe(
    filter(cat => !!cat)
  );

  constructor(private httpClient: HttpClient) {
  }

  loadAllCats(): void {
    this.getAllCats().subscribe(cat => {
      this.cats.next(cat);
      console.log('CATS LOADED');
    });
  }

  getAllCats(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(CAT_API_URL + '/cat');
  }

}
