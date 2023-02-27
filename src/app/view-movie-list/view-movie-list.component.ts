import { Component } from '@angular/core';

@Component({
  selector: 'app-view-movie-list',
  templateUrl: './view-movie-list.component.html',
  styleUrls: ['./view-movie-list.component.css']
})
export class ViewMovieListComponent {
  onSubmit(): void {
    console.log("hej");
  }

}
