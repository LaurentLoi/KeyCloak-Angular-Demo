import {Component, OnInit} from '@angular/core';
import {CatService} from './cat.service';
import {first} from 'rxjs/operators';
import {UserService} from '../../modules/keycloak/services/user.service';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  cats$ = this.catService.cats$;
  userRoles = this.userService.currentUserRoles;

  constructor(
    private catService: CatService,
    private userService: UserService
  ) {
    this.catService.loadAllCats();
  }

  async ngOnInit(): Promise<void> {
    // console.log('GET USER ROLES : ', this.keycloakService.getUserRoles());
    // console.log('GET USERNAME : ', this.keycloakService.getUsername());
    // console.log('GET USER PROFILE : ', await this.keycloakService.getKeycloakInstance().loadUserProfile());
  }
}
