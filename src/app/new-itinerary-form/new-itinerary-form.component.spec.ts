import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItineraryFormComponent } from './new-itinerary-form.component';

describe('NewItineraryFormComponent', () => {
  let component: NewItineraryFormComponent;
  let fixture: ComponentFixture<NewItineraryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItineraryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItineraryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
