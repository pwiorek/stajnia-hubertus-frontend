import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../../../data/entities/booking';

@Component({
  selector: 'app-booking-indicator',
  templateUrl: './booking-indicator.component.html',
  styleUrls: ['./booking-indicator.component.scss']
})
export class BookingIndicatorComponent implements OnInit {
  @Input() booking: Booking;

  constructor() { }

  ngOnInit(): void {
  }

}
