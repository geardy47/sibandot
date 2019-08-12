import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotensiItemComponent } from './potensi-item.component';

describe('PotensiItemComponent', () => {
  let component: PotensiItemComponent;
  let fixture: ComponentFixture<PotensiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotensiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotensiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
