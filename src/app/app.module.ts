import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabDetailsComponent } from './tab-details/tab-details.component';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab.component';

const appRoutes: Routes = [
  { path: 'tab/:id', component: TabComponent },
  { path: 'tabs', component: TabListComponent },
  { path: '', redirectTo: 'tabs', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TabListComponent,
    NavbarComponent,
    TabDetailsComponent,
    TabComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } //<-- debugging purposes
    ),
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
