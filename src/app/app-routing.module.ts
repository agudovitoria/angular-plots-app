import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {Graph1Component} from './graph-1/graph-1.component';
import {Graph2Component} from './graph-2/graph-2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'graph-1',
    component: Graph1Component
  },
  { path: 'graph-2',
    component: Graph2Component
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
