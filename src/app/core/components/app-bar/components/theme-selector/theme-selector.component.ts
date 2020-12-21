import {Component, EventEmitter, Input, Output} from '@angular/core';

const THEME_TRANSLATION_PREFIX = 'appBar.themeMenu';

@Component({
  selector: 'theme-selector',
  template: `
    <button mat-icon-button [matMenuTriggerFor]="colorMenu">
      <mat-icon>invert_colors</mat-icon>
    </button>
    <mat-menu #colorMenu="matMenu">
      <button
        mat-menu-item
        *ngFor="let theme of themes"
        (click)="onThemeSelected(theme)"
      >
        {{getThemeTranslationString(theme) | translate}}
      </button>
    </mat-menu>
  `
})
export class ThemeSelectorComponent {
  @Input()
  themes: Array<string>;

  @Output()
  themeSelected: EventEmitter<string> = new EventEmitter();

  onThemeSelected(theme: string) {
    this.themeSelected.emit(theme);
  }

  getThemeTranslationString(theme: string): string {
    return `${THEME_TRANSLATION_PREFIX}.${theme}`;
  }
}
