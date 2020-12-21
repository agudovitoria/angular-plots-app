import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppBarComponent} from './containers/app-bar.component';

import {ThemeSelectorComponent} from './components/theme-selector/theme-selector.component';
import {DarkModeSelectorComponent} from './components/dark-mode-selector/dark-mode-selector.component';
import {LeftSidenavControlComponent} from './components/left-sidenav-control/left-sidenav-control.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [
    AppBarComponent,
    ThemeSelectorComponent,
    DarkModeSelectorComponent,
    LeftSidenavControlComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AppBarComponent
  ]
})
export class AppBarModule {
}
