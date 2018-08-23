import { Component, OnInit } from '@angular/core';

import { EventModel } from './event.model';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: EventModel[];

  constructor(private _eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this._eventsService.getEvents()
      .subscribe(events => this.events = events);
  }

}
