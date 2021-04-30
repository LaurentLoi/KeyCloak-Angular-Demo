import {Injectable} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {Keycloak} from 'keycloak-angular/lib/core/services/keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) {
  }

  getLoggedUser(): Keycloak.KeycloakTokenParsed {
    try {
      const userDetails = this.keycloakService.getKeycloakInstance().idTokenParsed;
      console.log('UserDetails: ', userDetails);
      console.log('UserRoles: ', this.keycloakService.getUserRoles());
      return userDetails;
    } catch (e) {
      console.log('getLoggedUser Exception', e);
      return undefined;
    }
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
