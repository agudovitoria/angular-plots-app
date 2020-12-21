import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SidenavService} from '../../../../shared/services/app/sidenav.service';
import {ThemeService} from '../../../../shared/services/app/theme.service';
import {TitleService} from '../../../../shared/services/app/title.service';

const AVAILABLE_THEMES = ['other-theme', 'base-theme'];

@Component({
  selector: 'app-bar',
  template: `
    <mat-toolbar color="primary">
      <left-sidenav-control (toggle)="handleToggleLeftSidenav()">
      </left-sidenav-control>

      <span>{{title$ | async}}</span>

      <span fxFlex="auto"></span>

      <theme-selector
        [themes]="themes"
        (themeSelected)="handleThemeSelected($event)">
      </theme-selector>
      <dark-mode-selector (toggle)="handleToggleDark()">
      </dark-mode-selector>
    </mat-toolbar>
  `
})
export class AppBarComponent implements OnInit, OnDestroy {
  title$: Observable<string>;
  themes: Array<string>;

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService,
    private titleService: TitleService) {
  }

  ngOnInit() {
    this.title$ = this.titleService.selected;

    this.themes = AVAILABLE_THEMES;
  }

  ngOnDestroy() {
  }

  handleToggleLeftSidenav(): void {
    this.sidenavService.toggle();
  }

  handleThemeSelected(theme: string) {
    this.themeService.setTheme(theme);
  }

  handleToggleDark() {
    this.themeService.toggleDark();
  }
}
