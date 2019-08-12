import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetGrafikComponent } from './dataset-grafik.component';

describe('DatasetGrafikComponent', () => {
  let component: DatasetGrafikComponent;
  let fixture: ComponentFixture<DatasetGrafikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetGrafikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetGrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
