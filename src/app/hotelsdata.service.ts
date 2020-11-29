import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 
@Injectable()
export class hotelsdataService {
    constructor(private http:HttpClient) {}
    // Uses http.get() to load data 
    getHotelssdata() {
        console.log('123');
        return this.http.get('http://localhost:8000/hotelsdata');
    }
    addHotelsdata(Destination: string, Checkin: Date, Checkout: Date, Class: string,PropertyType:string,Guests: number) {
        this.http.post('http://localhost:8000/hotelsdata',{ Destination,Checkin,Checkout,Class,PropertyType,Guests })
      .subscribe((responseData) => {
         console.log(responseData);
       }); 
    }
    updateHotel(hotelId: string,Destination: string, Checkin: Date, Checkout: Date,
        Class: string,PropertyType:string, Guests: number) {
         //request path http://localhost:8000/students/5xbd456xx
         //first and last names will be send as HTTP body parameters
         this.http.put("http://localhost:8000/hotelsdata/"
         + hotelId,{ Destination,Checkin,Checkout,Class,PropertyType,Guests })
         .subscribe(() => {
         console.log('Updated: ' + hotelId);
         });
       }
    deleteHotel(hotelId: string) {
        this.http.delete("http://localhost:8000/hotelsdata/" + hotelId)
          .subscribe(() => {
              console.log('Deleted: ' + hotelId);
              location.reload();
          });
      }   
}
