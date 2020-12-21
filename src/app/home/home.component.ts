import {Component, OnInit} from '@angular/core';
import {TitleService} from '../shared/services/app/title.service';

@Component({
  template: `
    <div>
      <p>Home</p>
    </div>
  `,
  styleUrls: [
    'home.component.scss'
  ]
})
export class HomeComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('home.title');
  }


}
