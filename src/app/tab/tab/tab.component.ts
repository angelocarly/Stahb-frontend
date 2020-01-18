import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabService } from '../tab.service';
import { Tab } from '../../models/Tab';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  tab: Tab;

  constructor(private route: ActivatedRoute, private tabService: TabService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tabService.getTab(id).subscribe((tab: Tab) => this.tab = tab)
  }

}
