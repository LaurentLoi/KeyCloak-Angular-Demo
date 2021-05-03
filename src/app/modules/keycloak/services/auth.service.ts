import {Injectable} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {Keycloak} from 'keycloak-angular/lib/core/services/keycloak.service';
import {BehaviorSubject, from, Observable, ObservedValueOf, of} from 'rxjs';
import {Parcours} from '../../../common/models/parcours.model';
import {filter} from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) {
  }

  getLoggedUser(): Keycloak.KeycloakTokenParsed {
    try {
      return this.keycloakService.getKeycloakInstance().idTokenParsed;
    } catch (e) {
      console.log('getLoggedUser Exception', e);
      return undefined;
    }
  }

  getToken(): Observable<string> {
    return from(this.keycloakService.getToken());
  }

  logout(): void {
    this.keycloakService.logout().then();
  }

  redirectToProfile(): void {
    this.keycloakService.getKeycloakInstance().accountManagement();
  }

  getRoles(): string[] {
    return this.keycloakService.getUserRoles();
  }
}
