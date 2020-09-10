import {Component, Input, OnInit} from '@angular/core';
import {Config} from '../../../Model/config';
import {TimeService} from '../../../Service/time.service';
import {Sprint} from '../../../Model/sprint';
import {CommentService} from '../../../Service/comment.service';

@Component({selector: 'app-teams-recap', templateUrl: './teams-recap.component.html', styleUrls: ['./teams-recap.component.css']})
export class TeamsRecapComponent implements OnInit {
    @Input() sprints: Sprint[];
    WORKING_HOURS_PER_DAY = Config.workingHoursPerDay;
    comments: string[] = [];

    constructor(public timeService: TimeService, public commentService: CommentService) {
    }

    ngOnInit(): void {
        this.getComment(this.sprints);
        console.log(this.comments);

    }

    inAdvance(sprint: Sprint): number {
        let sumRemainingTime = 0;
        let sumTimeLeft = 0;
        let velocity;
        for (const c of sprint.team.collaborators) {
            velocity = c.getVelocity(Config.scrum, Config.leadDev);
            sumRemainingTime += c.remainingTime;
            sumTimeLeft += c.availableTime * velocity;
        }
        return Math.round((sumTimeLeft - sumRemainingTime) * 10) / 10;
    }

    gaugeValue(sprint: Sprint): number {
        let sumRemainingTime = 0;
        let sumTimeLeft = 0;
        let velocity;
        for (const c of sprint.team.collaborators) {
            velocity = c.getVelocity(Config.scrum, Config.leadDev);
            sumRemainingTime += c.remainingTime;
            sumTimeLeft += c.availableTime * velocity;
        }
        if (sumTimeLeft < 0) {
            return 0;
        } else {
            return Math.floor((sumTimeLeft / sumRemainingTime) * 100);
        }
    }

    getComment(sprints: Sprint[]): void {
        for (let i = 0; i < sprints.length; i++) {
            this.commentService.getComment(sprints[i].id).subscribe(data => {
                this.comments[i] = data.body.comment;
            });
        }

    }
}
