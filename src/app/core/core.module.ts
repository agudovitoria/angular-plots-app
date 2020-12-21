import { NgModule } from '@angular/core';
import {AppBarModule} from './components/app-bar/app-bar.module';
import {LeftSidenavModule} from './components/left-sidenav/left-sidenav.module';
import {DialogModule} from './components/dialog/dialog.module';
import {TableModule} from './components/table/table.module';
import {ToolBarModule} from './components/tool-bar/tool-bar.module';

@NgModule({
  imports: [
    AppBarModule,
    LeftSidenavModule,
    DialogModule,
    TableModule,
    ToolBarModule
  ],
  exports: [
    AppBarModule,
    LeftSidenavModule,
    DialogModule,
    TableModule,
    ToolBarModule
  ]
})
export class CoreModule {
}
