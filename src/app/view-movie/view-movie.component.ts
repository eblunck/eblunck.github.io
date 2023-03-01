import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {JenniferDataServiceService} from '../jennifer-data-service.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  id: number | undefined;
  
  constructor(private route: ActivatedRoute, public data: JenniferDataServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
  }

  getInfo(info: string): string{
    let movieInfo = this.data['allMovies']['_value'].filter((movie : any) => movie.id == this.id)[0][info];
    return movieInfo;
  }

  addToWatchList() {
    this.data.addToWatchList(this.data['allMovies']['_value'].filter((movie : any) => movie.id == this.id));
  }

  addToWatchedList() {
    this.data.addToWatchedList(this.data['allMovies']['_value'].filter((movie : any) => movie.id == this.id));
  }
}
