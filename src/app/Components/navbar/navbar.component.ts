import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ROUTE_COLLABORATORS = '/sprint/all';
  ROUTE_ALPHA = '/sprint/alpha';
  ROUTE_BETA = '/sprint/beta';
  ROUTE_GAMMA = '/sprint/gamma';
  ROUTE_DELTA = '/sprint/delta';
  ROUTE_TEAMS = '/sprint/teams';
  ROUTE_BACKLOG = '/backlog';
  ROUTE_RELEASE = '/release';



  constructor() { }

  ngOnInit(): void {
  }

}
