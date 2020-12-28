import {Component, OnInit} from '@angular/core';
import {TitleService} from '../shared/services/app/title.service';

const CANVAS_HEIGHT: number = 400;
const CANVAS_WIDTH: number = 400;
const CANVAS_CONTAINER_LINE_WIDTH: number = 2;
const GRAPH_POINT_WIDTH: number = 2;
const GRAPH_POINT_HEIGTH: number = 2;
const MAX_POINT_NUMBER: number = 400;
const GRAPH_POINTS: number = 500;

@Component({
  template: `
    <div class="list-container">
      <canvas id="myChart"></canvas>
    </div>
  `,
  styleUrls: [
    'graph-2.component.scss'
  ]
})
export class Graph2Component implements OnInit {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(private titleService: TitleService) {}
  getRandomNumber(): number {
    return Math.floor(Math.random() * (MAX_POINT_NUMBER - 1)) + 1;
  }
  ngOnInit(): void {
    this.titleService.setTitle('graph-2.title');

    this.canvas = document.getElementById('myChart') as HTMLCanvasElement;
    this.canvas.height = CANVAS_HEIGHT;
    this.canvas.width = CANVAS_WIDTH;
    this.ctx = this.canvas.getContext('2d');
    this.drawGraphContainer();
    this.drawRedPolygon();
    this.drawBluePolygon();
    this.drawGreenPolygon();
  }

  private drawGreenPolygon() {
    this.ctx.strokeStyle = 'green';
    this.ctx.beginPath();
    this.ctx.moveTo(100, 50);
    this.ctx.lineTo(200, 100);
    this.ctx.lineTo(150, 150);
    this.ctx.lineTo(100, 140);
    this.ctx.closePath();
    this.ctx.stroke();
    this.fillGraph();
  }

  private drawBluePolygon() {
    this.ctx.strokeStyle = 'blue';
    this.ctx.beginPath();
    this.ctx.moveTo(50, 50);
    this.ctx.lineTo(150, 100);
    this.ctx.lineTo(100, 150);
    this.ctx.lineTo(50, 140);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  private drawRedPolygon() {
    this.ctx.strokeStyle = 'red';
    this.ctx.beginPath();
    this.ctx.moveTo(5, 5);
    this.ctx.lineTo(100, 50);
    this.ctx.lineTo(50, 100);
    this.ctx.lineTo(5, 90);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  private drawGraphContainer() {
    this.ctx.strokeStyle = 'grey';
    this.ctx.lineWidth = CANVAS_CONTAINER_LINE_WIDTH;
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(CANVAS_WIDTH, 0);
    this.ctx.lineTo(CANVAS_WIDTH, CANVAS_HEIGHT);
    this.ctx.lineTo(0, CANVAS_HEIGHT);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  private fillGraph() {
    for (let x = 0; x < GRAPH_POINTS; x++) {
      this.ctx.fillRect(this.getRandomNumber(), this.getRandomNumber(), GRAPH_POINT_WIDTH, GRAPH_POINT_HEIGTH);
      this.ctx.fillRect(this.getRandomNumber(), this.getRandomNumber(), GRAPH_POINT_WIDTH, GRAPH_POINT_HEIGTH);
      this.ctx.fillRect(this.getRandomNumber(), this.getRandomNumber(), GRAPH_POINT_WIDTH, GRAPH_POINT_HEIGTH);
    }
  }
}
