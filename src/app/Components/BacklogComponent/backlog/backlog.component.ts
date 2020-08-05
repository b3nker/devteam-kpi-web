import { Component, OnInit } from '@angular/core';
import {Backlog} from '../../../Model/backlog';
import {BacklogService} from '../../../Service/backlog.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  backlog: Backlog;


  constructor(private backlogService: BacklogService) {}

  /* Fetch data from "api/backlog" route.
   * OnInit, create a backlog object and generate child components.
   */
  ngOnInit(): void {
    this.backlogService.getBacklog().subscribe(data => {
      this.backlog = data;
    });
  }

}
