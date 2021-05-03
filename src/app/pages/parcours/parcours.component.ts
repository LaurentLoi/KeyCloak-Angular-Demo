import {Component, OnInit} from '@angular/core';
import {ParcoursService} from './parcours.service';
import {first} from 'rxjs/operators';
import {AuthService} from '../../modules/keycloak/services/auth.service';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
})
export class ParcoursComponent implements OnInit {

  parcours$ = this.parcoursService.parcours$;

  constructor(private parcoursService: ParcoursService) {
    this.parcoursService.loadAllParcours();
  }

  async ngOnInit(): Promise<void> {
    console.log(await this.parcours$.pipe(first()).toPromise());
  }

}
