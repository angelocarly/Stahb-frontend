import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tab } from '../models/Tab';
import { AuthenticationService } from '../user/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabsUrl = "https://tabbackend.magnias.be/tabs"

  tabs: Observable<Tab[]>;

  constructor(
    private http: HttpClient, private auth: AuthenticationService) { }

  getTabs(): Observable<Tab[]> {
    if (!this.tabs) {
      this.tabs = this.http.get<Tab[]>(this.tabsUrl);
    }
    return this.tabs;
  }

  fetchTabs() {
    this.tabs = this.http.get<Tab[]>(this.tabsUrl);
  }

  getTab(id: string): Observable<Tab> {
    return this.http.get<Tab>(this.tabsUrl + `/${id}`)
  }

  addTab(tab: Tab): Observable<any> {
    return this.http.post<any>(this.tabsUrl, tab);
  }
}
