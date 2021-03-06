import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Graph1Component } from './graph-1.component';
import { TableModule } from '../core/components/table/table.module';
import { SharedModule } from '../shared/shared.module';
import { ToolBarModule } from '../core/components/tool-bar/tool-bar.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CanvasModule } from '../canvas/canvas.module';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        Graph1Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        CanvasModule,
        TableModule,
        ToolBarModule,
        MatGridListModule,
        MatCardModule,
        CoreModule,
    ]
})
export class Graph1Module {
}
