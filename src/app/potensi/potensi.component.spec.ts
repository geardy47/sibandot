import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotensiComponent } from './potensi.component';

describe('PotensiComponent', () => {
  let component: PotensiComponent;
  let fixture: ComponentFixture<PotensiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotensiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
