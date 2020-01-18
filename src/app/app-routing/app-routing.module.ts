import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from '../user/auth-guard.service';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'test',
    canActivate: [AuthGuardService],
    // loadChildren: 'app/weight-entry/weight-entry.module#WeightEntryModule',
    //data: { preload: true }
  },
  {
    path: '', redirectTo: '/tabs', pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: false
    })
  ],
  providers: [],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }