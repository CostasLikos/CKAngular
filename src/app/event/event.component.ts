import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from './event.model';
import { EventService } from "./event.service";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  //Filtering
  filterTerm: any
  //Properties
  Events!: Event[];
  //Paging
  totalRecords!: number;
  page: number = 1
  //Sorting
  orderHeader: string = '';
  isDescOrder: boolean = true;


  dtTrigger: Subject<Event> = new Subject<Event>();
  //Methods
  //READ
  ReadEvents() {
    this.EventService.getEvents().subscribe(data => {
      this.Events = data
      this.totalRecords = data.length
    });
  }


  constructor(private EventService: EventService) { }

  ngOnInit(): void {
    this.ReadEvents();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  handlePageChangeEvent(event: any) {
    this.page = event;
    this.ReadEvents();
  }
  sort(headerName: string) {
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }

}
