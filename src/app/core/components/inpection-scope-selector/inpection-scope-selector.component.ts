import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'inpection-scope-selector',
  template: `
    <mat-card>
      <mat-card-subtitle>Inspection scope</mat-card-subtitle>
      <mat-card-content>
        <mat-slider
            fxLayout="row"
            fxFlexAlign="center center"
            fxFlex="1 1 auto"
            [max]="max"
            [min]="min"
            [value]="value"
            [step]="step"
            thumbLabel="true"
            tickInterval="2"
            (change)="changePointsNumber($event)">
        </mat-slider>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./inpection-scope-selector.component.scss']
})
export class InpectionScopeSelectorComponent {

  @Input()
  min: number = 0;

  @Input()
  max: number = 10;

  @Input()
  value: number = 5;

  @Input()
  step: number = 1;



  @Output()
  onValueChanges: EventEmitter<number> = new EventEmitter<number>();

  changePointsNumber({ value }: MatSliderChange) {
    console.log(`event: ${value}`);
    this.onValueChanges.emit(value);
  }

}
