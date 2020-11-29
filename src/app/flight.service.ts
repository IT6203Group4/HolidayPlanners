
//test code
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class FlightService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data 
    getFlights() {
        return this.http.get('http://localhost:8000/flightsdata');
    }


    addFlights(From: string, Towhere: string, Trip: string, Depart: Date, Return: Date,  people: number) {
        this.http.post('http://localhost:8000/flightsdata',{ From,Towhere, Trip, Depart,Return, people })
      .subscribe((responseData) => {
         console.log(responseData);
       }); 
       
    }
    updateFlight(flightId: string,From: string, Towhere: string, Trip: string, Depart: Date, Return: Date,  people: number) {
        //request path http://localhost:8000/students/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
            this.http.put("http://localhost:8000/flightsdata/" 
                 + flightId,{ From,Towhere, Trip, Depart,Return, people  })
              .subscribe(() => {
                  console.log('Updated: ' + flightId);
              });
        }
    
    deleteFlight(flightId: string) {
        this.http.delete("http://localhost:8000/flightsdata/" + flightId)
          .subscribe(() => {
              console.log('Deleted: ' + flightId);
              location.reload();
          });
          
      }
}