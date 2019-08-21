import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpotensiItemComponent } from './subpotensi-item.component';

describe('SubpotensiItemComponent', () => {
  let component: SubpotensiItemComponent;
  let fixture: ComponentFixture<SubpotensiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpotensiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpotensiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
