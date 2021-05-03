import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GOLF_API_URL} from '../../config/http-config';
import {Parcours} from '../../common/models/parcours.model';
import {KeycloakService} from 'keycloak-angular';
import {filter} from 'rxjs/operators';
import {AuthService} from '../../modules/keycloak/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {

  private readonly parcours = new BehaviorSubject<Parcours[]>(null);
  public readonly parcours$ = this.parcours.pipe(
    filter(parcours => !!parcours)
  );

  constructor(private httpClient: HttpClient) {
  }

  loadAllParcours(): void {
    this.getAllParcours().subscribe(parcours => this.parcours.next(parcours));
  }

  getAllParcours(): Observable<Parcours[]> {
    return this.httpClient.get<Parcours[]>(GOLF_API_URL + '/parcours');
  }

}
