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
    let dataId =data[0]['id'];
    for (let i = 0; i < this.moviesToWatch['_value'].length; i++) {
      let currId =this.moviesToWatch['_value'][i][0]['id'];
      if (currId === dataId) {
        return;
      }
    }
    this.moviesToWatch.next([...this.moviesToWatch.getValue(), data]);
   
  }

}
