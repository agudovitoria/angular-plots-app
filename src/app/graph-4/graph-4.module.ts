import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '../core/components/table/table.module';
import { SharedModule } from '../shared/shared.module';
import { ToolBarModule } from '../core/components/tool-bar/tool-bar.module';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { Graph4Component } from './graph-4.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    Graph4Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    ToolBarModule,
    PlotlyModule
  ],
  exports: [
    Graph4Component
  ]
})
export class Graph4Module {
}
