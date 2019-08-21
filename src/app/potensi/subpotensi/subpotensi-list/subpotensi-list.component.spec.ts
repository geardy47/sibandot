import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpotensiListComponent } from './subpotensi-list.component';

describe('SubpotensiListComponent', () => {
  let component: SubpotensiListComponent;
  let fixture: ComponentFixture<SubpotensiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpotensiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpotensiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
