import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tab } from './models/Tab';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabsUrl = "https://tabbackend.magnias.be/tabs"

  constructor(
    private http: HttpClient) { }

  getTabs(): Observable<Tab[]> {
    return this.http.get<Tab[]>(this.tabsUrl)
  }

  getTab(id: string): Observable<Tab> {
    return this.http.get<Tab>(this.tabsUrl+`/${id}`)
  }
}
