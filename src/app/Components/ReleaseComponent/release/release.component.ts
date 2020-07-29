import { Component, OnInit } from '@angular/core';
import {RetrospectiveService} from '../../../Service/retrospective.service';
import {SprintService} from '../../../Service/sprint.service';
import {Router} from '@angular/router';
import {ReleaseService} from '../../../Service/release.service';
import {Release} from '../../../Model/release';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent implements OnInit {
  releases: Release[];

  constructor(private releaseService: ReleaseService) {}
  ngOnInit(): void {
    this.releaseService.getReleases().subscribe(data => {
      this.releases = data;
    });
  }

}
