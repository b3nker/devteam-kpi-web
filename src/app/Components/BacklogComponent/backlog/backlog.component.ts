import { Component, OnInit } from '@angular/core';
import {Backlog} from '../../../Model/backlog';
import {BacklogService} from '../../../Service/backlog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {
  backlog: Backlog;
  constructor(private backlogService: BacklogService, private router: Router) {}
  ngOnInit(): void {
    this.backlogService.getBacklog(this.router.url).subscribe(data => {
      this.backlog = data[0];
    });
  }

}
