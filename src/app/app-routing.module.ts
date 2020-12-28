import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Graph1Component } from './graph-1/graph-1.component';
import { Graph2Component } from './graph-2/graph-2.component';
import { Graph3Component } from './graph-3/graph-3.component';
import { Graph4Component } from './graph-4/graph-4.component';
import { Graph5Component } from './graph-5/graph-5.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'graph-1',
        component: Graph1Component
    },
    {
        path: 'graph-2',
        component: Graph2Component
    },
    {
        path: 'graph-3',
        component: Graph3Component
    },
    {
        path: 'graph-4',
        component: Graph4Component
    },
    {
        path: 'graph-5',
        component: Graph5Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
