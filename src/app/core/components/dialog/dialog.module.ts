import { NgModule } from '@angular/core';
import {ErrorDialogComponent} from './error/dialog-error.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    ErrorDialogComponent
  ]
})
export class DialogModule {
}
