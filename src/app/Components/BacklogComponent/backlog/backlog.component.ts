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

  ngOnInit(): void {
    this.backlogService.getBacklog().subscribe(data => {
      this.backlog = data;
    });
  }

}
