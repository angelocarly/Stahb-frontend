import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-weight-entry',
  templateUrl: './weight-entry.component.html',
  styleUrls: ['./weight-entry.component.scss']
})
export class UserComponent implements OnInit {
  @Input() weightEntry:User

  constructor() { }

  ngOnInit() {
  }

}
