import {Injectable} from '@angular/core';
import {KeycloakAuthGuard, KeycloakService} from 'keycloak-angular';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {async} from 'rxjs';
import {rejects} from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard{


  constructor(protected router: Router, protected keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    return new Promise(async (resolve, reject) => {
      if (!this.authenticated) {
        await this.keycloakAngular.login();
        resolve(false);
        return;
      }
      const requiredRoles = route.data.roles;
      let granted = false;
      if (!requiredRoles || requiredRoles.length === 0) {
        granted = true;
      } else {
        for (const requiredRole of requiredRoles) {
          if (this.roles.indexOf(requiredRole) > -1) {
            granted = true;
            break;
          }
        }
      }
      if (granted === false) {
        console.log('GRANTED FALSE');
        this.router.navigate(['/unauthorized']).then();
        resolve(granted);
      }
      resolve(granted);
    });
  }
}
