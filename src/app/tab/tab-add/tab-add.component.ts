import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/models/Tab';
import { ActivatedRoute, Router } from '@angular/router';
import { TabService } from '../tab.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tab-add',
  templateUrl: './tab-add.component.html',
  styleUrls: ['./tab-add.component.scss']
})
export class TabAddComponent implements OnInit {

  tab: Tab;
  tabForm;

  constructor(private route: ActivatedRoute, private router: Router, private tabService: TabService, private formBuilder : FormBuilder) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tabService.getTab(id).subscribe((tab: Tab) => this.tab = tab)

    this.tabForm = this.formBuilder.group({
      artist: '',
      song: '',
      tab: '',
      tuning: ''
    })
  }
  
  onSubmit(tab) {
    // Process checkout data here
    console.warn('Your tab has been added!', tab);

    //this.items = this.cartService.clearCart();
    this.tabService.addTab(tab).subscribe(res => {
      this.tabService.fetchTabs()
      this.router.navigate([`tab/${res.tab._id}`])
    });
    this.tabForm.reset();
  }

}
