import { Component, OnInit } from '@angular/core';
import { IntineraryService } from '../itinerary.service';
@Component({
  selector: 'app-list-itineraries',
  templateUrl: './list-itineraries.component.html',
  styleUrls: ['./list-itineraries.component.css']
})
export class ListItinerariesComponent implements OnInit {

  //declare variable to hold response and make it public to be accessible from components.html
  public itinerariesData;
  //initialize the call using IntineraryService 
  constructor(private _myService: IntineraryService) { }
  ngOnInit() {
    this.getItineraries();
  }
  //method called OnInit
  getItineraries() {
    this._myService.getItineraries().subscribe(
      //read data and assign to public variable itineraries
      data => { this.itinerariesData = data },
      err => console.error(err),
      () => console.log('finished loading')
    );
  }
  onDelete(itineraryId: string) {
    this._myService.deleteItinerary(itineraryId);
  }

}
