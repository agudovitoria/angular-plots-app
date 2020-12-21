import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToolBarComponent} from './containers/tool-bar.component';
import {SearchComponent} from './components/search/search.component';
import {CreateComponent} from './components/create/create.component';
import {DownloadComponent} from './components/download/download.component';
import {FilterComponent} from './components/filter/filter.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [
    ToolBarComponent,
    SearchComponent,
    CreateComponent,
    DownloadComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ToolBarComponent
  ]
})
export class ToolBarModule {
}
