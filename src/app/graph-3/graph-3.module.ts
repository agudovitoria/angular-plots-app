import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Graph3Component} from './graph-3.component';
import {TableModule} from '../core/components/table/table.module';
import {SharedModule} from '../shared/shared.module';
import {ToolBarModule} from '../core/components/tool-bar/tool-bar.module';

@NgModule({
  declarations: [
    Graph3Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    ToolBarModule
  ],
  exports: [
    Graph3Component
  ]
})
export class Graph3Module {
}
