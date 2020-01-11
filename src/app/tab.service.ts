import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tab } from './models/Tab';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabsUrl = "http://magnias.be:3000/tabs"

  constructor(
    private http: HttpClient) { }

  getTabs(): Observable<Tab[]> {
    return this.http.get<Tab[]>(this.tabsUrl)

  }
}
