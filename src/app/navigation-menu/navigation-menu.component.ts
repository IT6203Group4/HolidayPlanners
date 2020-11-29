import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  img =  "../../assets/images/plan.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
