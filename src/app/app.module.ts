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
import { BurndownChartComponent } from './Components/TeamComponent/burndown-chart/burndown-chart.component';
import { TeamComponent } from './Components/TeamComponent/team/team.component';
import { TeamsComponent } from './Components/TeamsComponent/teams/teams.component';
import { CollaboratorComponent } from './Components/CollaboratorsComponent/collaborator/collaborator.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { TeamChartsComponent } from './Components/TeamComponent/team-charts/team-charts.component';
import { TestComponentComponent } from './Components/OtherComponent/test-component/test-component.component';
import { ProgressBarComponent } from './Components/TeamComponent/progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
    BurndownChartComponent,
    TeamComponent,
    TeamsComponent,
    CollaboratorComponent,
    TeamChartsComponent,
    TestComponentComponent,
    ProgressBarComponent,
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
            {path: '404', component: NotFoundComponent},
            {path: '**', redirectTo: '/404'}
        ]),
        MatTooltipModule,
        MatGridListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
