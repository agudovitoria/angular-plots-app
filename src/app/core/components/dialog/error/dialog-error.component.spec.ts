import {ErrorDialogComponent} from './dialog-error.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

describe('Should render dialog error', () => {
  let component: ErrorDialogComponent;
  let fixture: ComponentFixture<ErrorDialogComponent>;
  let dialogTitle: HTMLElement;
  let dialogBody: HTMLElement;
  let acceptBtn: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: true },
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    });
    fixture = TestBed.createComponent(ErrorDialogComponent);
    component = fixture.componentInstance;
    dialogTitle = fixture.nativeElement.querySelector('h2');
    dialogBody = fixture.nativeElement.querySelector('mat-dialog-content p');
    acceptBtn = fixture.nativeElement.querySelector('button');
  });

  it('should render dialog correctly', () => {
    component.title = 'errors.api.400.title';
    component.body = 'Body';
    component.acceptBtnText = 'Accept';

    fixture.detectChanges();
    expect(dialogTitle.textContent).toContain(component.title);
    expect(dialogBody.textContent).toContain(component.body);
    expect(acceptBtn.textContent).toContain(component.acceptBtnText);
  });
});
