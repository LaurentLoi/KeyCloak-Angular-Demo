import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../modules/keycloak/services/auth.service';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
})
export class ParcoursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
