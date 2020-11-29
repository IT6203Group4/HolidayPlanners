import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItinerariesComponent } from './list-itineraries.component';

describe('ListItinerariesComponent', () => {
  let component: ListItinerariesComponent;
  let fixture: ComponentFixture<ListItinerariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItinerariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItinerariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
