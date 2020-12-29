import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotSelectorComponent } from './plot-selector.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';



@NgModule({
  declarations: [PlotSelectorComponent],
  exports: [
    PlotSelectorComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    FlexModule
  ]
})
export class PlotSelectorModule { }
