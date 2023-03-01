import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class JenniferDataServiceService {

  private allMovies = new BehaviorSubject<Array<number>>(new Array());
  private moviesToWatch = new BehaviorSubject<Array<number>>(new Array());

  allMovies$ = this.allMovies.asObservable();
  moviesToWatch$ = this.moviesToWatch.asObservable();

  addToDb(data: any) {
    this.allMovies.next(data);
  }

  addToWatchList(data: any) {
    this.moviesToWatch.next([...this.moviesToWatch.getValue(), data]);
    console.log(this.moviesToWatch['_value']);
  }

}
