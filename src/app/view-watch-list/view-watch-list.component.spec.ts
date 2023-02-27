import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWatchListComponent } from './view-watch-list.component';

describe('ViewWatchListComponent', () => {
  let component: ViewWatchListComponent;
  let fixture: ComponentFixture<ViewWatchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWatchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
