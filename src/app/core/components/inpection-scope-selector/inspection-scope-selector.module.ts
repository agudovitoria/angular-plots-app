import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InpectionScopeSelectorComponent } from './inpection-scope-selector.component';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [InpectionScopeSelectorComponent],
  exports: [
    InpectionScopeSelectorComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSliderModule
  ]
})
export class InspectionScopeSelectorModule { }
