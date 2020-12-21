import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'filter',
  template: `
    <button id="toolbar-filter" (click)="onFilter()" mat-icon-button>
      <mat-icon>filter_list</mat-icon>
    </button>
  `
})
export class FilterComponent {
  @Output()
  filter: EventEmitter<void> = new EventEmitter();

  onFilter() {
    this.filter.emit();
  }
}
