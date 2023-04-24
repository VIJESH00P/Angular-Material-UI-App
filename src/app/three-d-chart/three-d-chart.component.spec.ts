import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDChartComponent } from './three-d-chart.component';

describe('ThreeDChartComponent', () => {
  let component: ThreeDChartComponent;
  let fixture: ComponentFixture<ThreeDChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
