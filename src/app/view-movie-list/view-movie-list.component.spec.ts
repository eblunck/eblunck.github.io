import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMovieListComponent } from './view-movie-list.component';

describe('ViewMovieListComponent', () => {
  let component: ViewMovieListComponent;
  let fixture: ComponentFixture<ViewMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMovieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
