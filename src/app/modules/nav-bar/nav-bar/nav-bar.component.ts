import {Component, OnInit} from '@angular/core';
import {BASE_TITLE, NAV_TITLE} from '../../../config/base-config';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  NAV_TITLE = NAV_TITLE;
  BASE_TITLE = BASE_TITLE;

  previousElement;

  constructor() {
  }

  ngOnInit(): void {
    this.previousElement = document.getElementById('home-link') as HTMLLinkElement;
    this.previousElement.classList.add('active');
  }


  selectLink($event: MouseEvent): void {

    this.previousElement.classList.remove('active');

    this.previousElement = ($event.target as HTMLLinkElement);

    ($event.target as HTMLLinkElement).classList.add('active');
  }

}
