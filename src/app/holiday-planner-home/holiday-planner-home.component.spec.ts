import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayPlannerHomeComponent } from './holiday-planner-home.component';

describe('HolidayPlannerHomeComponent', () => {
  let component: HolidayPlannerHomeComponent;
  let fixture: ComponentFixture<HolidayPlannerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayPlannerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayPlannerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
