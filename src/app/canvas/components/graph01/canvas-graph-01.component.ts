import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CanvasComponent } from 'angular-canvas';
import { DataService } from '../../../core/data.service';
import {
    ChartDataSets,
    ChartLineOptions,
    ChartOptions,
    ChartScales,
    GridLineOptions,
    LinearScale,
    TickOptions
} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { GraphService } from '../../../core/graph.service';

@CanvasComponent
@Component({
    selector: 'canvas-graph-01',
    template: `
        <canvas baseChart
                [datasets]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [colors]="lineChartColors"
                [legend]="lineChartLegend"
                [chartType]="lineChartType"
                [plugins]="lineChartPlugins">
        </canvas>
    `,
    styleUrls: ['./canvas-graph-01.component.scss']
})
export class CanvasGraph01Component implements OnInit, OnChanges {
    lineChartOptions: ChartLineOptions;

    lineChartColors: Color[] = [
        {
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)',
        } as Color,
    ];

    lineChartLegend = true;
    lineChartType = 'line';
    lineChartPlugins = [];

    lineChartData: ChartDataSets[] = [];

    lineChartLabels: Label[];

    minVerticalAxeValue: number = 0;
    maxVerticalAxeValue: number = 0;

    @Input() points: number;

    constructor(private dataService: DataService,
                private graphService: GraphService) {
    }

    ngOnInit(): void {
        this.generateChart();
    }

    ngOnChanges(changes: SimpleChanges) {
        const values: SimpleChange = changes.points;
        if (!values.isFirstChange()) {
            this.generateChart();
        }
    }

    private generateChartOptions() {
        this.lineChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        zeroLineWidth: 3,
                        drawOnChartArea: false,
                    } as GridLineOptions,
                }],
                yAxes: [{
                    gridLines: {
                        zeroLineWidth: 3,
                        drawOnChartArea: false,
                    } as GridLineOptions,
                    ticks: {
                        min: this.minVerticalAxeValue,
                        max: this.maxVerticalAxeValue
                    } as TickOptions
                }]
            } as LinearScale,
        } as ChartLineOptions;
    }

    private generateChart() {
        const graph01data = this.dataService.getSyncGeometricData(this.points, 1.1, this.graphService.graph01);
        const graph02data = this.dataService.getSyncGeometricData(this.points, 1.2, this.graphService.graph01);
        const graph03data = this.dataService.getSyncGeometricData(this.points, 1.3, this.graphService.graph01);

        const values = [...graph01data, ...graph02data, ...graph03data];

        this.minVerticalAxeValue = Math.min(...values);
        this.maxVerticalAxeValue = Math.max(...values);

        this.generateChartOptions();

        this.generateChartData(graph01data, graph02data, graph03data);

        this.generateChartLabels();
    }

    private generateChartData(graph01data: Array<number>, graph02data: Array<number>, graph03data: Array<number>) {
        this.lineChartData = [
            { data: graph01data, fill: false, label: 'Series A' } as ChartDataSets,
            { data: graph02data, fill: false, label: 'Series B' } as ChartDataSets,
            { data: graph03data, fill: false, label: 'Series C' } as ChartDataSets
        ];
    }

    private generateChartLabels() {
        this.lineChartLabels = this.dataService.getLabels(this.points).map(n => n.toString());
    }
}
