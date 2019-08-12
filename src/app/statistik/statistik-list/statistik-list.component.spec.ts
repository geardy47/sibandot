import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistikListComponent } from './statistik-list.component';

describe('StatistikListComponent', () => {
  let component: StatistikListComponent;
  let fixture: ComponentFixture<StatistikListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistikListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
