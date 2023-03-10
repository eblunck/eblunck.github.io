import { Component } from '@angular/core';
import { JenniferDataServiceService } from './jennifer-data-service.service';
import { HttpClient } from '@angular/common/http';


const url: string =
  'https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&with_cast=4491';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jennifer-webpage';
  list: any;

  constructor(public data: JenniferDataServiceService, private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get(url).subscribe((data: any) => {
      this.list = data.results;
      this.data.addToDb(this.list);
    });

  }
}

/**
 * 
 * data.results.map((movie: any) => {
        console.log(movie.id);
        this.data.addMovie(movie.id);
      });
 */
