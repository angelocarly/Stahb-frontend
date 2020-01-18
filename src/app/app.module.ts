import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabListComponent } from './tab/tab-list/tab-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabDetailsComponent } from './tab/tab-details/tab-details.component';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab/tab.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserModule } from './user/user.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user/user.component';

const appRoutes: Routes = [
  { path: 'tab/:id', component: TabComponent },
  { path: 'tabs', component: TabListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tabs', component: TabListComponent },
  { path: '', redirectTo: 'tabs', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TabListComponent,
    NavbarComponent,
    TabDetailsComponent,
    TabComponent,
    PageNotFoundComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } //<-- debugging purposes
    ),
    NgbModule,
    BrowserModule,
    UserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
