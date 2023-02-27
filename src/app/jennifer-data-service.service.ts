import { Injectable } from '@angular/core';
import { ViewMovieComponent as Movie } from './view-movie/view-movie.component';
import { BehaviorSubject } from 'rxjs';

export const TEST_BOOKS: Movie[] = [
  { name: "A", desc: "A Book", author: "Alle", id: "0", review: "Bra" },
  { name: "B", desc: "B Book", author: "Blle", id: "1", review: "Dålig" }
];

@Injectable({
  providedIn: 'root'
})

export class JenniferDataServiceService {

  private moviesToWatch = new BehaviorSubject<Movie[]>([]);

  watchList$ = this.moviesToWatch.asObservable();

  setWatchList(movies: Movie[]) {
    this.moviesToWatch.next(movies);
  }
  setInitialList() {
    this.moviesToWatch.next(TEST_BOOKS);
  }
}
