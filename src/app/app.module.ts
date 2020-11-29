import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IntineraryService } from './itinerary.service';
import { NewItineraryFormComponent } from './new-itinerary-form/new-itinerary-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
//import { MenueditorComponent } from './menueditor/menueditor.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ListItinerariesComponent } from './list-itineraries/list-itineraries.component';
import { NotFoundComponent } from './not-found/not-found.component';
//hotels
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { HotelsDataFormComponent } from './hotels-data-form/hotels-data-form.component';
import { hotelsdataService } from './hotelsdata.service';  
//cars
import { ListCarsComponent } from './list-cars/list-cars.component';
import { NewCarrentalFormComponent } from './new-carrental-form/new-carrental-form.component';
import {CarrentalService} from './carrental.service'
//flights

import { ListFlightsComponent } from './list-flights/list-flights.component';
import { FlightService } from './flight.service';
import { NewFlightsdataformComponent } from './new-flightsdataform/new-flightsdataform.component';
import { HolidayPlannerHomeComponent } from './holiday-planner-home/holiday-planner-home.component';

const appRoutes: Routes = [ {
  path: '',                     //default component to display
   component: HolidayPlannerHomeComponent
 },       {
   path: 'addItinerary',         //when students added 
   component: NewItineraryFormComponent
 }, {
  path: 'editItinerary/:_id',         //when  edited editItinerary
  component: NewItineraryFormComponent 
},  {
   path: 'listItineraries',       //when students listed
   component: ListItinerariesComponent
 }, 
 {
  path: 'addHotel',         //when added 
  component: HotelsDataFormComponent
  
},       {
 path: 'edithotel/:_id',         //when edited 
 component: HotelsDataFormComponent
},
{
  path: 'listHotels',       //when listed
  component: ListHotelsComponent
},
{
  path: '',                     //default component to display
  component: ListCarsComponent
}, {
  path: 'addCar',         //when cars added  
  component: NewCarrentalFormComponent
}, {
  path: 'editCarrental/:_id',   //when cars edited
  component: NewCarrentalFormComponent
}, {
  path: 'listCars',       //when cars listed
  component: ListCarsComponent
}, {
  path: '',                     //default component to display
   component: ListFlightsComponent
 },{
   path: 'addFlight',         //when students added 
   component: NewFlightsdataformComponent
 }, {
  path: 'editFlight/:_id',         //when students edited 
  component: NewFlightsdataformComponent
}, {
   path: 'listFlights',       //when students listed
   component: ListFlightsComponent
 }, {
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 }
];

@NgModule({
  declarations: [
    AppComponent,
    NewItineraryFormComponent,
  //  MenueditorComponent,
    NavigationMenuComponent,
    ListItinerariesComponent,
    HotelsDataFormComponent,
    ListHotelsComponent,
    ListCarsComponent,
    NewCarrentalFormComponent,
    ListFlightsComponent,
    NewFlightsdataformComponent,
    NotFoundComponent,
    HolidayPlannerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [IntineraryService,hotelsdataService,CarrentalService,FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
