import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday-planner-home',
  templateUrl: './holiday-planner-home.component.html',
  styleUrls: ['./holiday-planner-home.component.css']
})
export class HolidayPlannerHomeComponent implements OnInit {
  img =  "../../assets/images/tripplan.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
