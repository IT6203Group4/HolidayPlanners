import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlightsdataformComponent } from './new-flightsdataform.component';

describe('NewFlightsdataformComponent', () => {
  let component: NewFlightsdataformComponent;
  let fixture: ComponentFixture<NewFlightsdataformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFlightsdataformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFlightsdataformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
