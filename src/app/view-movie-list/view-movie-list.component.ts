import { Component } from '@angular/core';
import {JenniferDataServiceService} from '../jennifer-data-service.service';
import { ViewMovieComponent as Movie } from '../view-movie/view-movie.component';

@Component({
  selector: 'app-view-movie-list',
  templateUrl: './view-movie-list.component.html',
  styleUrls: ['./view-movie-list.component.css']
})

export class ViewMovieListComponent {
  constructor(public data: JenniferDataServiceService) {
  }

  showMovies() : string {
    return JSON.stringify(this.data['moviesToWatch']['_value']);
  }

  addMovie() {
    let hej: Movie[] = [this.data['moviesToWatch']['_value'],
      { name: "C", desc: "A Book", author: "Calle", id: "2", review: "Mjeh" }];
    this.data.setWatchList(hej);
    console.log("hej");
  }
 
}