import {Component, OnInit} from '@angular/core';
import {CatService} from './cat.service';
import {first} from 'rxjs/operators';
import {UserService} from '../../modules/keycloak/services/user.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  cats$ = this.catService.cats$;

  constructor(
    private catService: CatService
  ) {
    this.catService.loadAllCats();
  }

  async ngOnInit(): Promise<void> {
    const cats = await this.cats$.pipe(first()).toPromise();
    console.log(cats);
  }
}
