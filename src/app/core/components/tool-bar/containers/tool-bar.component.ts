import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ToolbarConfig} from '../../../../shared/interfaces/toolbar-config';

const DEFAULT_CONFIG: ToolbarConfig = {
  canCreate: false,
  canDownload: false,
  canSearch: false,
  canFilter: false
};

@Component({
  selector: 'tool-bar',
  template: `
    <div id="tool-bar" fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="start center">
      <create *ngIf="config.canCreate" (create)="handleCreate()"></create>
      <download *ngIf="config.canDownload" (download)="handleDownload()"></download>

      <span fxFlex="auto"></span>

      <search *ngIf="config.canSearch"[options]="config.searchOptions" (search)="handleSearch($event)"></search>
      <filter *ngIf="config.canFilter" (filter)="handleFilter()"></filter>
    </div>
  `,
  styleUrls: [
    'tool-bar.component.scss'
  ]
})
export class ToolBarComponent {
  @Output()
  create: EventEmitter<void> = new EventEmitter();
  @Output()
  download: EventEmitter<void> = new EventEmitter();
  @Output()
  filter: EventEmitter<void> = new EventEmitter();
  @Output()
  search: EventEmitter<string> = new EventEmitter();

  @Input()
  config: ToolbarConfig = DEFAULT_CONFIG;

  handleCreate() {
    this.create.emit();
  }

  handleDownload() {
    this.download.emit();
  }

  handleSearch(searchText: string) {
    this.search.emit(searchText);
  }

  handleFilter() {
    this.filter.emit();
  }
}
