import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { TasksComponent } from './tasks/tasks.component';
import { CalenderComponent } from './calender/calender.component';
import { MessagesComponent } from './messages/messages.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
    path:'candidates',component:CandidatesComponent 
  },
  {
    path:'tasks',component:TasksComponent
  },
  {
    path:'calender',component:CalenderComponent 
  },
  {
    path:'messages',component:MessagesComponent
  },
  {
    path:'reports',component:ReportsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
