import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjschartComponent } from './chartjschart.component';

describe('ChartjschartComponent', () => {
  let component: ChartjschartComponent;
  let fixture: ComponentFixture<ChartjschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartjschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
