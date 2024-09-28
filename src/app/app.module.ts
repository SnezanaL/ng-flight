import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { DateComponent } from './components/date/date.component';

@NgModule({
  imports: [FormsModule, BrowserModule, HttpClientModule],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent,
    FlightCardComponent,
    DateComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
