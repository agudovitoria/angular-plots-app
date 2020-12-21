import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'create',
  template: `
    <button id="toolbar-create" (click)="onCreate()" mat-flat-button color="primary">
      <mat-icon>add</mat-icon>
      {{'toolBar.create.new' | translate}}
    </button>
  `
})
export class CreateComponent {
  @Output()
  create: EventEmitter<void> = new EventEmitter();

  onCreate() {
    this.create.emit();
  }
}
