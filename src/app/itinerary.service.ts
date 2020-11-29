import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class IntineraryService {
    constructor(private http: HttpClient) { }
    // Uses http.get() to load data 
    getItineraries() {
        return this.http.get('http://localhost:8000/itinerariesData');  
        
    }
       // Uses http.post() to post data 
       addItineraries(travellingFrom: string, travellingTo: string,StartDate:Date,EndDate:Date,
        Adults:string,Children:string,PackageType:String ,ContactNumber:number ) {
        this.http.post('http://localhost:8000/itinerariesData',{ travellingFrom, travellingTo,StartDate,EndDate,Adults,
    Children,PackageType,ContactNumber}) .subscribe((responseData) => {
         console.log(responseData);
       });
    }
    deleteItinerary(itineraryId: string) {
        this.http.delete("http://localhost:8000/itinerariesData/" + itineraryId)
          .subscribe(() => {
              console.log('Deleted: ' + itineraryId);
          });
          location.reload();
      }
      
      updateItinerary(itineraryId: string,travellingFrom: string, travellingTo: string,StartDate:Date,EndDate:Date,
        Adults:string,Children:string,PackageType:String ,ContactNumber:number) {

            this.http.put("http://localhost:8000/itinerariesData/"  + itineraryId,{travellingFrom,travellingTo,StartDate,
            EndDate,Adults,Children,PackageType,ContactNumber })
              .subscribe(() => {
                  console.log('Updated: ' + itineraryId);
              });
        }

}
