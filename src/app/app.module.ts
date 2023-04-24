import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';

import { SideBarComponent } from './side-bar/side-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';

import { CandidatesComponent } from './candidates/candidates.component';
import { TasksComponent } from './tasks/tasks.component';
import { CalenderComponent } from './calender/calender.component';
import { MessagesComponent } from './messages/messages.component';
import { ReportsComponent } from './reports/reports.component';
import { CardComponent } from './card/card.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import {MatCardModule} from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ThreeDChartComponent } from './three-d-chart/three-d-chart.component';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    SideBarComponent,
    MainContentComponent,
    CandidatesComponent,
    TasksComponent,
    CalenderComponent,
    MessagesComponent,
    ReportsComponent,
    CardComponent,
    AreaChartComponent,
    BarChartComponent,
    ThreeDChartComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    HighchartsChartModule,
    MatTooltipModule,
    MatTableModule
   




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
