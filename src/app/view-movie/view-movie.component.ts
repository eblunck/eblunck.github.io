import { Component } from '@angular/core';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent {
  name:string = "";
  desc:string = "";
  author:string = "";
  id:string = "";
  review:string = "";
}
