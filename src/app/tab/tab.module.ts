import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../user/authentication.service';
import { AuthGuardService } from '../user/auth-guard.service';
import { TabService } from './tab.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TabComponent } from './tab/tab.component';
import { TabListComponent } from './tab-list/tab-list.component';
import { TabAddComponent } from './tab-add/tab-add.component';

const routes = [
  { path: 'tabs/add', component: TabAddComponent },
  { path: 'tab/:id', component: TabComponent },
  { path: 'tabs', component: TabListComponent }
]

@NgModule({
  declarations: [
    TabComponent,
    TabAddComponent,
    TabListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthenticationService, 
    AuthGuardService, 
    TabService
  ]
})
export class TabModule { }
