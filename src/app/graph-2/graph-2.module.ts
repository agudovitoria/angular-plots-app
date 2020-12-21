import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Graph2Component} from './graph-2.component';
import {TableModule} from '../core/components/table/table.module';
import {SharedModule} from '../shared/shared.module';
import {ToolBarModule} from '../core/components/tool-bar/tool-bar.module';

@NgModule({
  declarations: [
    Graph2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    ToolBarModule
  ],
  exports: [
    Graph2Component
  ]
})
export class Graph2Module {
}
