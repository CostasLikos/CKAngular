import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';
import { EventService } from "./event.service";


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  //Properties
  Events!: Event[];
  //Methods
  ReadEvents() {
    this.EventService.getEvents().subscribe(data => this.Events = data);
  }


  constructor(private EventService: EventService) { }

  ngOnInit(): void {
    this.ReadEvents();
  }

}
