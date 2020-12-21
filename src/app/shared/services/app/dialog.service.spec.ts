import {DialogService} from './dialog.service';
import {MatDialogConfig} from '@angular/material/dialog';
import {DialogConfig} from '../../interfaces/dialog-config';
import {ErrorDialogComponent} from '../../../core/components/dialog/error/dialog-error.component';

describe('Dialog Service', () => {
  let dialogService: DialogService;
  let matDialogSpy;
  beforeEach(() => {
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    dialogService = new DialogService(matDialogSpy);
  });

  it('should open error dialog', () => {
    const config: DialogConfig = {body: '', title: ''};
    dialogService.open('error', config);

    expect(matDialogSpy.open.calls.count()).toBe(1);

    const expectedDialogConfig = new MatDialogConfig();
    expectedDialogConfig.autoFocus = false;
    expectedDialogConfig.data = { title: '', body: '', acceptBtnText: undefined };
    const expectedComponent = ErrorDialogComponent;

    expect(matDialogSpy.open).toHaveBeenCalledWith(expectedComponent, expectedDialogConfig);
  });

  it('should not open dialog if it does not exist', () => {
    const config: DialogConfig = {body: '', title: ''};
    dialogService.open('unknown', config);

    expect(matDialogSpy.open.calls.count()).toBe(0);
  });

});
