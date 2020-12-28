import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '../core/components/table/table.module';
import { SharedModule } from '../shared/shared.module';
import { ToolBarModule } from '../core/components/tool-bar/tool-bar.module';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { Graph5Component } from './graph-5.component';
import { MatGridListModule } from '@angular/material/grid-list';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
    declarations: [
        Graph5Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        TableModule,
        ToolBarModule,
        PlotlyModule,
        MatGridListModule
    ],
    exports: [
        Graph5Component
    ]
})
export class Graph5Module {
}
