import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

const MAX_POINT_NUMBER: number = 100;
const GRAPH_POINTS: number = 50;

@Component({
    template: `
        <div class="list-container">
            <mat-grid-list cols="4">
                <mat-grid-tile>
                    <button mat-button (click)="randomizeData()">GENERATE DATA</button>
                </mat-grid-tile>
                <mat-grid-tile>
                    <button mat-button (click)="randomizeData()">GENERATE DATA</button>
                </mat-grid-tile>
                <mat-grid-tile>
                    <button mat-button (click)="randomizeData()">GENERATE DATA</button>
                </mat-grid-tile>
                <mat-grid-tile>
                    <button mat-button (click)="randomizeData()">GENERATE DATA</button>
                </mat-grid-tile>
                <mat-grid-tile colspan="4">
                    <plotly-plot [data]="graph.data"
                                 [layout]="graph.layout"
                                 [useResizeHandler]="true">
                    </plotly-plot>
                </mat-grid-tile>
            </mat-grid-list>
        </div>
    `,
    styleUrls: ['./graph-5.component.scss']
})
export class Graph5Component implements OnInit {

    graph: any;

    getRandomNumber(): number {
        return Math.floor(Math.random() * (MAX_POINT_NUMBER - 1)) + 1;
    }

    getRandomValues() {
        const randomData = [];
        for (let i = 0; i < MAX_POINT_NUMBER; i++) {
            randomData.push(this.getRandomNumber());
        }

        return randomData;
    }

    randomizeData() {
        this.graph.data[0].x = this.getRandomValues();
        this.graph.data[0].y = this.getRandomValues();
        this.graph.data[1].x = this.getRandomValues();
        this.graph.data[1].y = this.getRandomValues();
    }

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.graph = {
            data: [
                {
                    x: [],
                    y: [],
                    mode: 'markers+text',
                    type: 'scatter',
                    name: 'Team A',
                }, {

                    x: [],
                    y: [],
                    mode: 'markers+text',
                    type: 'scatter',
                    name: 'Team B',
                }
            ],
            layout: {
                xaxis: {
                    range: [0, MAX_POINT_NUMBER]
                },
                yaxis: {
                    range: [0, MAX_POINT_NUMBER]
                },
                legend: {
                    y: 0.5,
                    yref: 'paper',
                    font: {
                        family: 'Arial, sans-serif',
                        size: 11,
                        color: 'grey',
                    }
                },
                title: 'Point cloud generator'
            }
        };

        this.randomizeData();
    }
}
