import { Component, OnInit } from '@angular/core';
import { Tab } from '../models/Tab';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {

  tabs: Tab[];

  constructor(private tabService: TabService) { }

  ngOnInit() {
    this.getTabs();
  }

  getTabs() {
    this.tabService.getTabs()
      .subscribe(tabs => this.tabs = tabs);
  }

  onclick(tab : Tab) {
    console.log(tab._id);
  }
}
