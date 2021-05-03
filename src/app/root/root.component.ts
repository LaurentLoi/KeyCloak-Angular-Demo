import {Component, OnInit} from '@angular/core';
import {AuthService} from '../modules/keycloak/services/auth.service';
import {ParcoursService} from '../pages/parcours/parcours.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initAppContext();
  }

  private initAppContext(): void {
    this.authService.getLoggedUser();
  }

}
