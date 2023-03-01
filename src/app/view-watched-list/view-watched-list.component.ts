import { Component } from '@angular/core';
import {JenniferDataServiceService} from '../jennifer-data-service.service';


@Component({
  selector: 'app-view-watched-list',
  templateUrl: './view-watched-list.component.html',
  styleUrls: ['./view-watched-list.component.css']
})
export class ViewWatchedListComponent {
  constructor(public data: JenniferDataServiceService) {
  }
}
