// src/app/flight-search/flight-search.component.ts

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../../models/flight';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;

  date: string = new Date().toISOString();

  basket: { [key: number]: boolean } = {
    3: true,
    5: true,
  };

  url = environment.apiUrl + '/flight';

  constructor(private http: HttpClient) {
    console.log('🚀 ~ FlightSearchComponent ~ url:', this.url);
  }

  ngOnInit(): void {
    // this.createDemoFlight();
  }

  createDemoFlight(): void {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const newFlight: Flight = {
      id: 0,
      from: 'Gleisdorf',
      to: 'Graz',
      date: new Date().toISOString(),
    };

    this.http.post<Flight>(this.url, newFlight, { headers }).subscribe({
      next: (flight) => {
        console.debug('Neue Id: ', flight.id);
      },
      error: (err) => {
        console.debug('Error', err);
      },
    });
  }

  search(): void {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('from', this.from).set('to', this.to);

    this.http.get<Flight[]>(this.url, { headers, params }).subscribe({
      next: (flights) => {
        this.flights = flights;
        console.log('🚀 ~ FlightSearchComponent ~ search ~ flights:', flights);
      },
      error: (err) => {
        console.debug('Error', err);
      },
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
