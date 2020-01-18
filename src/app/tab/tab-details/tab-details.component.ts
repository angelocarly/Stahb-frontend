import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../../models/Tab';

@Component({
  selector: 'app-tab-details',
  templateUrl: './tab-details.component.html',
  styleUrls: ['./tab-details.component.scss']
})
export class TabDetailsComponent implements OnInit {

  @Input() tab: Tab;
  
  constructor() { }

  ngOnInit() {
    console.log(this.tab)
  }

}
