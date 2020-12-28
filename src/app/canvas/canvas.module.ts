import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasGraph01Component } from './components/graph01/canvas-graph-01.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [CanvasGraph01Component],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [
    CanvasGraph01Component
  ],
})
export class CanvasModule { }
