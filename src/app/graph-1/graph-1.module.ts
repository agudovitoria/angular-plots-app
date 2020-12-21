import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Graph1Component} from './graph-1.component';
import {TableModule} from '../core/components/table/table.module';
import {SharedModule} from '../shared/shared.module';
import {ToolBarModule} from '../core/components/tool-bar/tool-bar.module';

@NgModule({
  declarations: [
    Graph1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    ToolBarModule
  ],
  exports: [
    Graph1Component
  ]
})
export class Graph1Module {
}
