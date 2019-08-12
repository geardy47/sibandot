import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpotensiDetailComponent } from './subpotensi-detail.component';

describe('SubpotensiDetailComponent', () => {
  let component: SubpotensiDetailComponent;
  let fixture: ComponentFixture<SubpotensiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpotensiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpotensiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
