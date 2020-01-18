import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

export class SelectivePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      console.log('preload ' + route.path);
      return load();
    }
    return of(null);
  }
}