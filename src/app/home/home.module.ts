import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {TableModule} from '../core/components/table/table.module';
import {SharedModule} from '../shared/shared.module';
import {ToolBarModule} from '../core/components/tool-bar/tool-bar.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    ToolBarModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
