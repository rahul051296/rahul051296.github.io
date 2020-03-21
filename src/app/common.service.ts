import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private previousUrl: string = undefined;
  private currentUrl: string = undefined;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  private themeDataSource = new BehaviorSubject<string>("");
  themeValue = this.themeDataSource.asObservable();

  public updateThemeValue(theme) {
    this.themeDataSource.next(theme);
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }

}
