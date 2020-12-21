import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LeftSidenavComponent} from './left-sidenav.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [
    LeftSidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LeftSidenavComponent
  ]
})
export class LeftSidenavModule {
}
