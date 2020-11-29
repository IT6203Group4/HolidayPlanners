import { Component, OnInit, Input } from '@angular/core';
import { FlightService } from '../flight.service';  
import {Router} from '@angular/router';
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-flightsdataform',
  templateUrl: './new-flightsdataform.component.html',
  styleUrls: ['./new-flightsdataform.component.css']
})
export class NewFlightsdataformComponent implements OnInit {
@Input() From: string;
@Input() Towhere: string;
@Input() Trip: string;
@Input() Depart: Date;
@Input() Return: Date;
@Input() people: number;

public mode = 'add'; 
private id: string;

constructor(private _myService: FlightService, private router:Router,
  public route: ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
       if (paramMap.has('_id'))
         { this.mode = 'edit'; /*request had a parameter _id */ 
           this.id = paramMap.get('_id');}
       else {this.mode = 'add';
           this.id = null; 
          }
     });
  }
  
  onSubmit(){
    // console.log("You submitted: " + this.From + " " + this.Towhere +" "+ this.Trip + " "+ this.Depart + " "+ this.Return + ""+ this.people + " ");
    if(this.mode == 'add')
    this._myService.addFlights(this.From ,this.Towhere, this.Trip, this.Depart, this.Return, this.people);
    if(this.mode == 'edit')
    this._myService.updateFlight(this.id, this.From ,this.Towhere, this.Trip, this.Depart, this.Return, this.people);
    this.router.navigate(['/listFlights']);
  }


}
