import { Component, OnInit, Input } from '@angular/core';
import { IntineraryService} from '../itinerary.service';
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-itinerary-form',
  templateUrl: './new-itinerary-form.component.html',
  styleUrls: ['./new-itinerary-form.component.css']
})
export class NewItineraryFormComponent implements OnInit {
  @Input() travellingFrom: string;
  @Input() travellingTo: string;
  @Input() StartDate: Date;
  @Input() EndDate: Date;
  @Input() Adults: string;
  @Input() Children: string;
  @Input() PackageType: string;
  @Input() ContactNumber: number; 

 public mode = 'add'; //default mode
  private id: string; //itinerary id
  onSubmit() {
    console.log("You submitted: " + this.travellingFrom + " " + this.travellingTo + " " + this.StartDate + " " + this.EndDate + " "
    + this.Adults + " " + this.Children + " " +this.PackageType+" "+ this.ContactNumber);
    if(this.mode == 'add ')
    this._myService.addItineraries(this.travellingFrom,this.travellingTo,this.StartDate,this.EndDate,
      this.Adults,this.Children,this.PackageType,this.ContactNumber);
    if(this.mode == 'edit ')
    this._myService.updateItinerary(this.id,this.travellingFrom, this.travellingTo,this.StartDate,this.EndDate,this.Adults,this.Children,this.PackageType,this.ContactNumber);
        this.router.navigate(['/listItineraries']);
    
    
  }
    //initialize the call using StudentService 
    constructor(private _myService: IntineraryService , private router:Router ,public route: ActivatedRoute) { }
    ngOnInit(){
      this.route.paramMap.subscribe((paramMap: ParamMap ) => {
         if (paramMap.has('_id'))
           { this.mode = 'edit '; /*request had a parameter _id */ 
             this.id = paramMap.get('_id');}
         else {this.mode = 'add ';
             this.id = null; }
       });
    }
    
}
