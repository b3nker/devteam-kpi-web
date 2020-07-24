import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HorizontalBarChartComponent} from './Components/OtherComponent/horizontal-bar-chart/horizontal-bar-chart.component';
import {ChartsModule} from 'ng2-charts';
import {PieChartComponent} from './Components/OtherComponent/pie-chart/pie-chart.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CollaboratorTableComponent} from './Components/CollaboratorsComponent/collaborator-table/collaborator-table.component';
import {MatTableModule} from '@angular/material/table';
import {NavbarComponent} from './Components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {WelcomePageComponent} from './Components/welcome-page/welcome-page.component';
import {TeamTableComponent} from './Components/TeamComponent/team-table/team-table.component';
import {TeamsTableComponent} from './Components/TeamsComponent/teams-table/teams-table.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { TeamComponent } from './Components/TeamComponent/team/team.component';
import { TeamsComponent } from './Components/TeamsComponent/teams/teams.component';
import { CollaboratorComponent } from './Components/CollaboratorsComponent/collaborator/collaborator.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { TeamChartsComponent } from './Components/TeamComponent/team-charts/team-charts.component';
import { TestComponentComponent } from './Components/OtherComponent/test-component/test-component.component';
import { ProgressBarComponent } from './Components/TeamComponent/progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { WelcomeCardComponent } from './Components/welcome-page/welcome-card/welcome-card.component';
import {MatCardModule} from '@angular/material/card';
import { TeamsChartsComponent } from './Components/TeamsComponent/teams-charts/teams-charts.component';
import { TeamChartsFrontComponent } from './Components/TeamComponent/team-charts-front/team-charts-front.component';
import { TeamChartsMiddleComponent } from './Components/TeamComponent/team-charts-middle/team-charts-middle.component';
import { BacklogComponent } from './Components/BacklogComponent/backlog/backlog.component';
import { PieChartBacklogComponent } from './Components/BacklogComponent/pie-chart-backlog/pie-chart-backlog.component';
import { LineChartBacklogComponent } from './Components/BacklogComponent/line-chart-backlog/line-chart-backlog.component';
import { TeamRetrospectiveBarChartComponent } from './Components/TeamComponent/team-retrospective-bar-chart/team-retrospective-bar-chart.component';
import { TeamRetrospectiveLineChartComponent } from './Components/TeamComponent/team-retrospective-line-chart/team-retrospective-line-chart.component';
import { TeamBootstrapTableComponent } from './Components/TeamComponent/team-bootstrap-table/team-bootstrap-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalBarChartComponent,
    PieChartComponent,
    CollaboratorTableComponent,
    NavbarComponent,
    WelcomePageComponent,
    TeamTableComponent,
    TeamsTableComponent,
    NotFoundComponent,
    TeamComponent,
    TeamsComponent,
    CollaboratorComponent,
    TeamChartsComponent,
    TestComponentComponent,
    ProgressBarComponent,
    WelcomeCardComponent,
    TeamsChartsComponent,
    TeamChartsFrontComponent,
    TeamChartsMiddleComponent,
    BacklogComponent,
    PieChartBacklogComponent,
    LineChartBacklogComponent,
    TeamRetrospectiveBarChartComponent,
    TeamRetrospectiveLineChartComponent,
    TeamBootstrapTableComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ChartsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        RouterModule.forRoot([
            {path: '', component: WelcomePageComponent},
            {path: 'sprint/all', component: CollaboratorComponent},
            {path: 'sprint/alpha', component: TeamComponent},
            {path: 'sprint/beta', component: TeamComponent},
            {path: 'sprint/gamma', component: TeamComponent},
            {path: 'sprint/teams', component: TeamsComponent},
            {path: 'backlog', component: BacklogComponent},
            {path: '404', component: NotFoundComponent},
            {path: '**', redirectTo: '/404'}
        ]),
        MatTooltipModule,
        MatGridListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
