import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'

    })
  }

  //GET
  getEvents(): Observable<Event[]> {
    return this.httpService.get<Event[]>(this.URL);
  }


  private URL = "https://localhost:44342/api/APIEvents";


  constructor(private httpService:HttpClient) { }
}
