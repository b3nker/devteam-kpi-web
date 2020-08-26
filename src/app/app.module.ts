import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
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
import { ProgressBarComponent } from './Components/TeamComponent/progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { WelcomeCardComponent } from './Components/welcome-page/welcome-card/welcome-card.component';
import {MatCardModule} from '@angular/material/card';
import { TeamsChartsComponent } from './Components/TeamsComponent/teams-charts/teams-charts.component';
import { BacklogComponent } from './Components/BacklogComponent/backlog/backlog.component';
import { PieChartBacklogComponent } from './Components/BacklogComponent/pie-chart-backlog/pie-chart-backlog.component';
import { LineChartBacklogComponent } from './Components/BacklogComponent/line-chart-backlog/line-chart-backlog.component';
import { TeamRetrospectiveBarChartComponent } from './Components/TeamComponent/team-retrospective-bar-chart/team-retrospective-bar-chart.component';
import { TeamRetrospectiveLineChartComponent } from './Components/TeamComponent/team-retrospective-line-chart/team-retrospective-line-chart.component';
import { ReleaseComponent } from './Components/ReleaseComponent/release/release.component';
import { ReleaseTableComponent } from './Components/ReleaseComponent/release-table/release-table.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { TeamChartsRoleComponent } from './Components/TeamComponent/team-charts-role/team-charts-role.component';
import { HorizontalBarChartComponent } from './Components/GenericComponent/horizontal-bar-chart/horizontal-bar-chart.component';
import { TableComponent } from './Components/GenericComponent/table/table.component';
import { TeamOverviewComponent } from './Components/TeamComponent/team-overview/team-overview.component';
import {MatTabsModule} from '@angular/material/tabs';
import { StoryPointProgressBarComponent } from './Components/GenericComponent/story-point-progress-bar/story-point-progress-bar.component';
import {NgxGaugeModule} from 'ngx-gauge';
import { GaugeComponent } from './Components/GenericComponent/gauge/gauge.component';

@NgModule({
  declarations: [
    AppComponent,
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
    ProgressBarComponent,
    WelcomeCardComponent,
    TeamsChartsComponent,
    BacklogComponent,
    PieChartBacklogComponent,
    LineChartBacklogComponent,
    TeamRetrospectiveBarChartComponent,
    TeamRetrospectiveLineChartComponent,
    ReleaseComponent,
    ReleaseTableComponent,
    TeamChartsRoleComponent,
    HorizontalBarChartComponent,
    TableComponent,
    TeamOverviewComponent,
    StoryPointProgressBarComponent,
    GaugeComponent,
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
            {path: 'sprint/delta', component: TeamComponent},
            {path: 'sprint/teams', component: TeamsComponent},
            {path: 'backlog', component: BacklogComponent},
            {path: 'release', component: ReleaseComponent},
            {path: '404', component: NotFoundComponent},
            {path: '**', redirectTo: '/404'}
        ]),
        MatTooltipModule,
        MatGridListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatOptionModule,
        MatSelectModule,
        FormsModule,
        MatTabsModule,
        NgxGaugeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
