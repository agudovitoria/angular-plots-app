import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Observable} from 'rxjs';
import {SidenavService} from './shared/services/app/sidenav.service';
import {ThemeService} from './shared/services/app/theme.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container [ngClass]="selectedTheme$ | async">
      <mat-sidenav #leftSidenav [autoFocus]="false">
        <left-sidenav></left-sidenav>
      </mat-sidenav>
      <mat-sidenav-content class="mat-app-background">
        <div class="sidenav-container">
          <div class ="header-container">
            <app-bar></app-bar>
          </div>
          <div class="main-container">
            <router-outlet></router-outlet>
          </div>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent implements AfterViewInit, OnInit {
  selectedTheme$: Observable<string>;

  @ViewChild('leftSidenav') public leftSidenav: MatSidenav;

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService,
    private translate: TranslateService) {

    this.translate.setDefaultLang('es');
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.leftSidenav);
  }

  ngOnInit() {
    this.selectedTheme$ = this.themeService.selected;
  }
}
