import { Component, OnInit } from '@angular/core';
import {BASE_TITLE} from '../../config/base-config';
import {AuthService} from '../../modules/keycloak/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  BASE_TITLE = BASE_TITLE;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getLoggedUser();
  }

}
