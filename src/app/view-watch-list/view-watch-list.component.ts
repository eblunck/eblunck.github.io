import { Component } from '@angular/core';
import {JenniferDataServiceService} from '../jennifer-data-service.service';


@Component({
  selector: 'app-view-watch-list',
  templateUrl: './view-watch-list.component.html',
  styleUrls: ['./view-watch-list.component.css']
})
export class ViewWatchListComponent {

  constructor(public data: JenniferDataServiceService) {
  }

}
