import { Component, OnInit } from '@angular/core';
import { TitleService } from '../shared/services/app/title.service';
import { getPlotFor, PlotFunction, PlotType } from '../shared/enums/PlotType';


@Component({
    template: `
        <div fxLayout="row"
             fxFlex="grow"
             fxFlexAlign="center center"
             fxLayoutGap="8px">
            <div fxLayout="row"
                 fxFlex="grow"
                 fxFlexAlign="center center">
                <div fxLayout="row"
                     fxFlex="20%"
                     fxFlexAlign="center center">
                    <mat-card fxLayout="column"
                              fxFlexAlign="start"
                              fxFlexOffset="8px"
                              fxFlex="grow">
                        <div fxLayout="row"
                             fxFlex="nogrow"
                             fxFlexAlign="center center">
                            <inpection-scope-selector
                                    (onValueChanges)="onInspectionScopeChanges($event)"
                                    [value]="graphPoints"
                                    max="200"
                                    min="10"
                                    step="10">
                            </inpection-scope-selector>
                        </div>
                        <div fxLayout="row"
                             fxFlex="nogrow"
                             fxFlexAlign="center center">
                            <plot-selector (onValueChanges)="onPlotSelectionChanges($event)"></plot-selector>
                        </div>
                    </mat-card>
                </div>
                <div fxLayout="row"
                     fxFlex="grow"
                     fxFlexAlign="center center">
                    <mat-card fxLayout="column"
                              fxFlexAlign="center center"
                              fxFlex="82%">
                        <canvas-graph-01 [points]="graphPoints"
                                         [plotFunction]="plotToApply"
                        ></canvas-graph-01>
                    </mat-card>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['graph-1.component.scss']
})
export class Graph1Component implements OnInit {
    graphPoints: number = 100;
    plotToApply: PlotFunction = () => 0;

    constructor(private titleService: TitleService) {
    }

    onInspectionScopeChanges(inspectionScopeValue: number) {
        this.graphPoints = inspectionScopeValue;
    }


    onPlotSelectionChanges(plotSelection: PlotType) {
        this.plotToApply = getPlotFor(plotSelection);
    }

    ngOnInit(): void {
        this.titleService.setTitle('graph-1.title');
    }
}
