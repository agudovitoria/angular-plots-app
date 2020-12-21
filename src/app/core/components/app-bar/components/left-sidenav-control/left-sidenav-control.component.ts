import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'left-sidenav-control',
  template: `
    <button mat-icon-button (click)="onToggleLeftSidenav()">
      <mat-icon>menu</mat-icon>
    </button>
  `
})
export class LeftSidenavControlComponent {
  @Output()
  toggle: EventEmitter<void> = new EventEmitter();

  onToggleLeftSidenav() {
    this.toggle.emit();
  }
}
