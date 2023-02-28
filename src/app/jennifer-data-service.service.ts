import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class JenniferDataServiceService {

  private moviesToWatch = new BehaviorSubject<Array<number>>(new Array());

  watchList$ = this.moviesToWatch.asObservable();

  addToDb(data: any) {
    this.moviesToWatch.next(data);
    console.log(data);
  }
  loadDb() {
  }

}
