import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cause } from './cause.model';

@Injectable({
  providedIn: 'root'
})
export class CauseService {

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'

    })
  }

  //GET
  getCauses(): Observable<Cause[]> {
    return this.httpService.get<Cause[]>(this.URL);
  }


  private URL = "https://localhost:44342/api/APICauses";

  constructor(private httpService:HttpClient) { }
}
