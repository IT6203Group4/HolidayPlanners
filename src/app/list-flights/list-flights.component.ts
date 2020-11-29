import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service'; 

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.css']
})
export class ListFlightsComponent implements OnInit {
  public flightsdata;
  //initialize the call using StudentService 
  constructor(private _myService: FlightService) { }
  ngOnInit() {
    this.getFlights();

}
getFlights() {
  this._myService.getFlights().subscribe(
     //read data and assign to public variable students
     data => { this.flightsdata = data},
     err => console.error(err),
     () => console.log('finished loading')
   );
 }
 onDelete(flightId: string) {
  this._myService.deleteFlight(flightId);
}

}
