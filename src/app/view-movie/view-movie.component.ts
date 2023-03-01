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

  showMovie(): string {
    let movieInfo = this.data['moviesToWatch']['_value'].filter((movie : any) => movie.id == this.id);
    return JSON.stringify(movieInfo);
  }

  getInfo(info: string): string{
    let movieInfo = this.data['moviesToWatch']['_value'].filter((movie : any) => movie.id == this.id)[0][info];
    return movieInfo;
  }
}
