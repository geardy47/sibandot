import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetCariComponent } from './dataset-cari.component';

describe('DatasetCariComponent', () => {
  let component: DatasetCariComponent;
  let fixture: ComponentFixture<DatasetCariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetCariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetCariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
