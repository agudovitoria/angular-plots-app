import { Component, OnInit } from '@angular/core';
import { TitleService } from '../shared/services/app/title.service';


@Component({
    template: `
        <div fxLayout="column"
             fxFlex="1 1 auto"
             fxFlexAlign="center center"
             fxLayoutGap="8px">
            <div fxLayout="row"
                 fxFlexAlign="center center"
                 fxFlex="1 1 auto">
                <mat-card fxFlex="20%">
                    <inpection-scope-selector
                            (onValueChanges)="onInspectionScopeChanges($event)"
                            max="100"
                            min="10"
                            step="10">
                    </inpection-scope-selector>
                </mat-card>
                <mat-card fxLayout="column"
                          fxFlexAlign="center center"
                          fxFlex="1 1 auto">
                    <canvas-graph-01 [points]="graphPoints"></canvas-graph-01>
                </mat-card>
            </div>
        </div>
    `,
    styleUrls: ['graph-1.component.scss']
})
export class Graph1Component implements OnInit {
    graphPoints: number = 0;

    constructor(private titleService: TitleService) {
    }

    onInspectionScopeChanges(inspectionScopeValue: number) {
        this.graphPoints = inspectionScopeValue;
    }

    ngOnInit(): void {
        this.titleService.setTitle('graph-1.title');
    }
}
