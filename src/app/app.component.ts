import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';
import $ from "jquery";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'abitolutup-front';
  page = 'Home';
  name = '';

  constructor(
    private http : HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
  }

  ngOnInit() {

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.titleService.setTitle(this.getNestedRouteTitles().join(' | '));

      this.page = this.titleService.getTitle();
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  getNestedRouteTitles(): string[] {
    let currentRoute = this.router.routerState.root.firstChild;
    const titles: string[] = [];

    while (currentRoute) {
      if (currentRoute.snapshot.routeConfig && currentRoute.snapshot.routeConfig.data?.title) {
        titles.push(currentRoute.snapshot.routeConfig.data.title);
      }

      currentRoute = currentRoute.firstChild;
    }

    return titles;
  }

  getLastRouteTitle(): string {
    let currentRoute = this.router.routerState.root.firstChild;

    while (currentRoute && currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    return currentRoute?.snapshot.data?.title;
  }
}
