import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPageComponent } from './history-page/history-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { TimerPageComponent } from './timer-page/timer-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/timer', pathMatch: 'full' },
  { path: 'timer', component: TimerPageComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: 'history', component: HistoryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
