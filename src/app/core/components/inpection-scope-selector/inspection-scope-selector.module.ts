import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InpectionScopeSelectorComponent } from './inpection-scope-selector.component';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [InpectionScopeSelectorComponent],
  exports: [
    InpectionScopeSelectorComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSliderModule,
    FlexModule
  ]
})
export class InspectionScopeSelectorModule { }
