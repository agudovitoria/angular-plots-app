import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'download',
  template: `
    <button id="toolbar-download" (click)="onDownload()" mat-icon-button>
      <mat-icon fontSet="material-icons-outlined">archive</mat-icon>
    </button>
  `
})
export class DownloadComponent {
  @Output()
  download: EventEmitter<void> = new EventEmitter();

  onDownload() {
    this.download.emit();
  }
}
