import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JenniferDataServiceService } from '../jennifer-data-service.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  id: number | undefined;

  ratingForm = this.formBuilder.group({
    rating: ''
  });

  constructor(private route: ActivatedRoute, public data: JenniferDataServiceService,
    public formBuilder: FormBuilder) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  getInfo(info: string): string {
    let movieInfo = this.data['allMovies']['_value'].filter((movie: any) => movie.id == this.id)[0][info];
    return movieInfo;
  }

  onSubmit(): void {
    console.log(this.ratingForm.value['rating']);
    this.data.rateMovie(this.data['allMovies']['_value'].filter((movie: any) => movie.id == this.id),
      this.ratingForm.value['rating']);
  }


  addToWatchList() {
    this.data.addToWatchList(this.data['allMovies']['_value'].filter((movie: any) => movie.id == this.id));
  }

  addToWatchedList() {
    this.data.addToWatchedList(this.data['allMovies']['_value'].filter((movie: any) => movie.id == this.id));
  }
}
