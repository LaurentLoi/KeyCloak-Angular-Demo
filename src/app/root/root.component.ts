import {Component, OnInit} from '@angular/core';
import {AuthService} from '../modules/keycloak/services/auth.service';
import {CatService} from '../pages/cats/cat.service';

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
