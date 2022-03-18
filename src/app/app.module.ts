import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimerPageComponent } from './timer-page/timer-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { RecordsService } from './records.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimerPageComponent,
    ResultsPageComponent,
    HistoryPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [RecordsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
