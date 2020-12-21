import {Component, OnInit} from '@angular/core';
import {TitleService} from '../shared/services/app/title.service';

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
  canvas: any;
  ctx: any;

  constructor(private titleService: TitleService) {}
  getRandomNumber(): number {
    return Math.floor(Math.random() * (300 - 1)) + 1;
  }
  ngOnInit(): void {
    this.titleService.setTitle('graph-2.title');

    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = 'red';
    this.ctx.beginPath();
    this.ctx.moveTo(5, 5);
    this.ctx.lineTo(100, 50);
    this.ctx.lineTo(50, 100);
    this.ctx.lineTo(5, 90);
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.strokeStyle = 'blue';
    this.ctx.beginPath();
    this.ctx.moveTo(50, 50);
    this.ctx.lineTo(150, 100);
    this.ctx.lineTo(100, 150);
    this.ctx.lineTo(50, 140);
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.strokeStyle = 'green';
    this.ctx.beginPath();
    this.ctx.moveTo(100, 50);
    this.ctx.lineTo(200, 100);
    this.ctx.lineTo(150, 150);
    this.ctx.lineTo(100, 140);
    this.ctx.closePath();
    this.ctx.stroke();

    for (let x = 0; x < 500; x++) {
      this.ctx.fillRect(this.getRandomNumber(), this.getRandomNumber(), 2, 2);
      this.ctx.fillRect(this.getRandomNumber(), this.getRandomNumber(), 2, 2);
      this.ctx.fillRect(this.getRandomNumber(), this.getRandomNumber(), 2, 2);
    }
  }
}
