import {Component, OnInit} from '@angular/core';
import * as Chart from 'chart.js';
import {TitleService} from '../shared/services/app/title.service';

@Component({
  template: `
    <div class="list-container">
      <canvas style="margin: 20px auto" id="myChart" width="900" height="400"></canvas>
    </div>
  `,
  styleUrls: [
    'graph-1.component.scss'
  ]
})
export class Graph1Component implements OnInit {
  canvas: any;
  ctx: any;

  constructor(private titleService: TitleService) {}

  getRandomNumber(index: number): number {
    return Math.floor(Math.random() * (1000 * index - 1)) + 1;
  }
  ngOnInit(): void {
    this.titleService.setTitle('graph-1.title');

    const labels = [];
    const data = [];
    const data2 = [];
    const data3 = [];

    for (let x = 0; x < 20; x++) {
      labels.push(x + 1);
      data.push(this.getRandomNumber(x));
      data2.push(this.getRandomNumber(x));
      data3.push(this.getRandomNumber(x));
    }

    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    const myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Dataset 1',
          data,
          backgroundColor: ['red'],
          borderColor: ['red'],
          fill: false
        },
        {
          label: 'Dataset 2',
          data: data2,
          backgroundColor: ['green'],
          borderColor: ['green'],
          fill: false
        },
        {
          label: 'Dataset 3',
          data: data3,
          backgroundColor: ['blue'],
          borderColor: ['blue'],
          fill: false
        }]
      },
      options: {
        legend: {
          display: false
        },
        responsive: false,
        display: true
      }
    });
  }
}
