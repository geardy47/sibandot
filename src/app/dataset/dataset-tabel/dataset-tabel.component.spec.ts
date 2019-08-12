import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetTabelComponent } from './dataset-tabel.component';

describe('DatasetTabelComponent', () => {
  let component: DatasetTabelComponent;
  let fixture: ComponentFixture<DatasetTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
