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
      console.log(res.tab._id)
      this.router.navigate([`tab/${res.tab._id}`])
      this.tabService.fetchTabs()
    });
    this.tabForm.reset();
  }

}
