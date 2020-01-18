import { Component } from '@angular/core';
import { AuthenticationService } from './user/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loggedIn : boolean = false;
  userName : string;

  constructor(private authService : AuthenticationService) {
  }

  ngOnInit() {
    this.authService.user$.subscribe(item => {
      this.loggedIn = item != null;
      this.userName = item;
    })
  }

  title = 'Stahb';
}
