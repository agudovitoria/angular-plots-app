import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getDescriptionFor, getPlotTypes, PlotType } from '../../../shared/enums/PlotType';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
    selector: 'plot-selector',
    template: `
        <mat-card fxFlex="grow">
            <mat-card-content fxFlex="grow"
                              fxLayout="column">
                <mat-form-field appearance="fill"
                                fxFlex="grow">
                    <mat-label>Please select plot...</mat-label>
                    <mat-select fxFlex="grow"
                                [formControl]="plotType"
                                (selectionChange)="onPlotChange($event)">
                        <mat-option *ngFor="let plotKey of plotKeys"
                                    [value]="plotKey">
                            {{ getDescription(plotKey) }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./plot-selector.component.scss']
})
export class PlotSelectorComponent implements OnInit {

    plotType = new FormControl();
    plotKeys: PlotType[] = getPlotTypes();

    @Output()
    onValueChanges: EventEmitter<PlotType> = new EventEmitter<PlotType>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onPlotChange({ value }: MatSelectChange) {
        console.log(value);
        this.onValueChanges.emit(value);
    }

    getValue(plotType: PlotType): string {
        return PlotType[plotType];
    }

    getDescription(plotType: PlotType): string {
        return getDescriptionFor(plotType);
    }
}
