import {Component, OnInit} from '@angular/core';
import {BASE_TITLE} from '../../config/base-config';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  BASE_TITLE = BASE_TITLE;

  constructor() {
  }

  ngOnInit(): void {
  }

}
