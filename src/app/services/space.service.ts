import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SpaceService {
  filter = new Subject();

  constructor(private http: HttpClient){}

  getData(payload) {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&' + new URLSearchParams(payload).toString());
  }

}
