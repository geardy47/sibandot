import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistikItemComponent } from './statistik-item.component';

describe('StatistikItemComponent', () => {
  let component: StatistikItemComponent;
  let fixture: ComponentFixture<StatistikItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistikItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistikItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
