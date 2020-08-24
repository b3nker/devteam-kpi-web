import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private ROUTE_COLLABORATORS = '/sprint/all';
  private ROUTE_ALPHA = '/sprint/alpha';
  private ROUTE_BETA = '/sprint/beta';
  private ROUTE_GAMMA = '/sprint/gamma';
  private ROUTE_DELTA = '/sprint/delta';
  private ROUTE_TEAMS = '/sprint/teams';
  private ROUTE_BACKLOG = '/backlog';
  private ROUTE_RELEASE = '/release';



  constructor() { }

  ngOnInit(): void {
  }

}
