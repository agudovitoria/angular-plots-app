import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'error-dialog',
  template: `
  <div fxLayout="row" fxLayoutAlign="start">
    <i class="sets-icons-warning-filled mat-error"></i>
    <h2 mat-dialog-title class="mat-error">{{ title | translate }}</h2>
  </div>
  <mat-dialog-content>
    <p>{{ body | translate }}</p>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close class="mat-primary accept-btn">{{ acceptBtnText | translate }}</button>
  </mat-dialog-actions>`,
  styleUrls: ['./dialog-error.component.scss']
})
export class ErrorDialogComponent {
  body: string;
  title: string;
  acceptBtnText: string;

  constructor( @Inject(MAT_DIALOG_DATA) data) {
    this.body = data.body;
    this.title = data.title;
    this.acceptBtnText = data.acceptBtnText;
  }
}
