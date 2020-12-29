import { Component, OnInit } from '@angular/core';
import { TitleService } from '../shared/services/app/title.service';


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
                              fxFlexAlign="center center"
                              fxFlex="grow">
                        <inpection-scope-selector
                                (onValueChanges)="onInspectionScopeChanges($event)"
                                [value]="graphPoints"
                                max="200"
                                min="10"
                                step="10">
                        </inpection-scope-selector>
                    </mat-card>
                </div>
                <div fxLayout="row"
                     fxFlex="grow"
                     fxFlexAlign="center center">
                    <mat-card fxLayout="column"
                              fxFlexAlign="center center"
                              fxFlex="82%">
                        <canvas-graph-01 [points]="graphPoints"></canvas-graph-01>
                    </mat-card>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['graph-1.component.scss']
})
export class Graph1Component implements OnInit {
    graphPoints: number = 100;

    constructor(private titleService: TitleService) {
    }

    onInspectionScopeChanges(inspectionScopeValue: number) {
        this.graphPoints = inspectionScopeValue;
    }

    ngOnInit(): void {
        this.titleService.setTitle('graph-1.title');
    }
}
