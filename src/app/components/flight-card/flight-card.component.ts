import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss',
})
export class FlightCardComponent implements OnInit, OnChanges {
  @Input() item: Flight | null = null;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>(); // <-- Add this line to the component class to create an output property named selectedChange of type EventEmitter<boolean>. This property will emit a boolean value when the selected state of the flight card changes. The EventEmitter class is a subclass of Subject, which is a type of observable that can be used to emit values to subscribers.

  constructor() {
    console.log('constructor', this.item);
  }

  ngOnInit() {
    //this.selectedChange.next(true);
    // setTimeout(() => this.selectedChange.next(true), 1000); //  emit a value of true to the selectedChange output property after a delay of 1 second. This will cause the flight card to be selected after it is rendered.

    console.log('ngOnInit', this.item);
  }

  ngOnChanges(changes: SimpleChanges) {
    // <-- Add this method to the component class to log changes to the item and selected input properties.

    console.log('ngOnChanges', this.item);

    if (changes.item) {
      // <-- Add this block to log changes to the item input property.
      console.log('ngOnChanges: item');
    }
    if (changes.selected) {
      console.log('ngOnChanges: selected', changes);
    }
  }

  select() {
    this.selected = true;
    this.selectedChange.emit(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(false);
  }
}
