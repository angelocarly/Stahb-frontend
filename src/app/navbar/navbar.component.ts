import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;
  loggedIn = false;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.isNavbarCollapsed = true;
    if (this.authService.token) {
      this.loggedIn = true;
    }

    this.router.events.subscribe((val) => {
      this.loggedIn = this.authService.token != "";
    })

  }


}
