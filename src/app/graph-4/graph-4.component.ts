import { Component, OnInit } from '@angular/core';

const CANVAS_HEIGHT: number = 400;
const CANVAS_WIDTH: number = 400;

@Component({
    template: `
        <div class="list-container">
            <plotly-plot [data]="graph.data" [layout]="graph.layout"
                         [useResizeHandler]="true" [style]="{position: 'relative', width: '100%', height: '100%'}">
            </plotly-plot>
            \`,
        </div>
    `,
    styleUrls: ['./graph-4.component.scss']
})
export class Graph4Component implements OnInit {

    graph: any;

    constructor() {
    }

    ngOnInit(): void {
        this.graph = {
            data: [
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: { color: 'red' }
                },
                {
                    x: [1, 2, 3],
                    y: [2, 5, 3],
                    type: 'bar'
                },
            ],
            layout: {
                autosize: true,
                title: 'Bar + Line graphs example'
            },
        };
    }
}
