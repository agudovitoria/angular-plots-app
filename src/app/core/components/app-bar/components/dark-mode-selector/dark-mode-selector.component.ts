import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'dark-mode-selector',
  template: `
    <button mat-icon-button (click)="onToggleDark()">
      <mat-icon>brightness_medium</mat-icon>
    </button>
  `
})
export class DarkModeSelectorComponent {
  @Output()
  toggle: EventEmitter<void> = new EventEmitter();

  onToggleDark() {
    this.toggle.emit();
  }
}
