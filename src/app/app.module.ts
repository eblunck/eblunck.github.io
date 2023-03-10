import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMovieListComponent } from './view-movie-list/view-movie-list.component';
import { ViewWatchListComponent } from './view-watch-list/view-watch-list.component';
import { ViewWatchedListComponent } from './view-watched-list/view-watched-list.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

//Elin was here
// Maja test
// Emilia test

@NgModule({
  declarations: [
    AppComponent,
    ViewMovieListComponent,
    ViewWatchListComponent,
    ViewWatchedListComponent,
    ViewMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    RouterModule.forRoot([
      { path: 'ViewMovieList', component: ViewMovieListComponent },
      { path: 'ViewMovie/:id', component: ViewMovieComponent },
      { path: 'ViewWatchedListComponent', component: ViewWatchedListComponent },
      { path: 'ViewWatchListComponent', component: ViewWatchListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
