import { Component } from '@angular/core';
import {JenniferDataServiceService} from '../jennifer-data-service.service';

@Component({
  selector: 'app-view-movie-list',
  templateUrl: './view-movie-list.component.html',
  styleUrls: ['./view-movie-list.component.css']
})
export class ViewMovieListComponent {
  constructor(public data: JenniferDataServiceService) {

  }

  showMovies() : string {
    this.data.setWatchList();
    console.log(this.data['moviesToWatch']['_value']);
    return JSON.stringify(this.data['moviesToWatch']['_value']);
  }
}