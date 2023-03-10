import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class JenniferDataServiceService {

  private allMovies = new BehaviorSubject<Array<number>>(new Array());
  private unwatchedMovies = new BehaviorSubject<Array<number>>(new Array());
  private moviesToWatch = new BehaviorSubject<Array<number>>(new Array());
  private watchedList = new BehaviorSubject<Array<number>>(new Array());

  allMovies$ = this.allMovies.asObservable();
  unwatchedMovies$ = this.unwatchedMovies.asObservable();
  moviesToWatch$ = this.moviesToWatch.asObservable();
  watchedList$ = this.watchedList.asObservable();


  addToDb(data: any) {
    let newJson = new Array();
    data.forEach((item : any) => {
      let newItem = {...item, ...{my_rating: "betygsätt filmen längre ner"}};
      newJson.push(newItem);
    });
    this.allMovies.next([...newJson]);
    this.unwatchedMovies.next([...newJson]);
  }

  addToWatchList(data: any) {
    let dataId = data[0]['id'];
    for (let i = 0; i < this.moviesToWatch['_value'].length; i++) {
      let currId = this.moviesToWatch['_value'][i][0]['id'];
      if (currId === dataId) {
        return;
      }
    }
    this.deleteFromUnwatched(data[0]);
    this.moviesToWatch.next([...this.moviesToWatch.getValue(), data]);
  }
  
  rateMovie(data: any, rating: any) {
    let dataId = data[0]['id'];
    this.allMovies['_value'].forEach((item : any) => {
      if (item['id'] === dataId) {
        item['my_rating'] = rating;
        return;
      } 
    });
  }

  addToWatchedList(data: any) {
    let dataId = data[0]['id'];
    for (let i = 0; i < this.watchedList['_value'].length; i++) {
      let currId = this.watchedList['_value'][i][0]['id'];
      if (currId === dataId) {
        return;
      }
    }
    this.deleteFromUnwatched(data[0]);
    this.deleteFromToWatch(data[0]);
    this.watchedList.next([...this.watchedList.getValue(), data]);
  }
  
  deleteFromUnwatched(data: any) {
    let index = this.unwatchedMovies['_value'].indexOf(data, 0);
    if (index > -1) {
      this.unwatchedMovies['_value'].splice(index, 1);
    }
  }

  deleteFromToWatch(data: any) {
    let dataId = data['id'];
    for (let i = 0; i < this.moviesToWatch['_value'].length; i++) {
      let currId = this.moviesToWatch['_value'][i][0]['id'];
      if (currId === dataId) {
        this.moviesToWatch['_value'].splice(i, 1);
        console.log(this.moviesToWatch['_value']);
        return;
      }
    }
  }
}