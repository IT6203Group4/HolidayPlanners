import { Component, OnInit } from '@angular/core';
import { hotelsdataService } from '../hotelsdata.service';

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.css']
})
export class ListHotelsComponent implements OnInit {

  public hotelsdata;
 
  constructor(private _myService: hotelsdataService) { }
  ngOnInit() {
    this.getHotelsdata();

}
getHotelsdata() {
  console.log('abcd');
  this._myService.getHotelssdata().subscribe(
    
     data => { this.hotelsdata = data},
     err => console.error(err),
     () => console.log('finished loading')
   );
   console.log('xyz');
 }
 onDelete(hotelId: string) {
  this._myService.deleteHotel(hotelId);
}

}