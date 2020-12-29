import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
    selector: 'inpection-scope-selector',
    template: `
        <mat-card fxFlex>
            <mat-card-content fxFlex fxLayout="column">
                <span>Inspection scope</span>
                <mat-slider [max]="max"
                            [min]="min"
                            [value]="value"
                            [step]="step"
                            [tickInterval]="step"
                            thumbLabel="true"
                            (change)="changePointsNumber($event)">
                </mat-slider>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./inpection-scope-selector.component.scss']
})
export class InpectionScopeSelectorComponent {

    @Input()
    min!: number;

    @Input()
    max!: number;

    @Input()
    value!: number;

    @Input()
    step!: number;


    @Output()
    onValueChanges: EventEmitter<number> = new EventEmitter<number>();

    changePointsNumber({ value }: MatSliderChange) {
        this.onValueChanges.emit(value);
    }

}
