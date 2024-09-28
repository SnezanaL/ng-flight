import { Component, Input } from '@angular/core';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss',
})
export class FlightCardComponent {
  @Input() item: Flight | null = null;
  @Input() selected = false;

  select() {
    this.selected = !this.selected;
  }

  deselect() {
    this.selected = false;
  }
}
