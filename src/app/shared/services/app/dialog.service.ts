import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {ErrorDialogComponent} from '../../../core/components/dialog/error/dialog-error.component';
import {DialogConfig} from '../../interfaces/dialog-config';

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) {}

  open(type: string, config: DialogConfig) {

    const dialogComponent = this.getDialogComponent(type);

    if (!dialogComponent) {
      return;
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
     title: config.title,
     body: config.body,
     acceptBtnText: config.acceptBtnText,
    };

    this.dialog.open(dialogComponent, dialogConfig);
  }

  private getDialogComponent(type: string): any {
    switch (type) {
      case 'error': {
        return ErrorDialogComponent;
      }
      default: {
        return null;
      }
    }
  }
}
