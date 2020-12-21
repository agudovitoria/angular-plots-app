import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../core/material.module';

import {SidenavService} from './services/app/sidenav.service';
import {ThemeService} from './services/app/theme.service';
import {TitleService} from './services/app/title.service';
import {HttpErrorHandler} from '../core/interceptors/http-error-handler';
import {DialogService} from './services/app/dialog.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    FormsModule
  ],
  providers: [
    SidenavService,
    ThemeService,
    TitleService,
    HttpErrorHandler,
    DialogService
  ]
})
export class SharedModule {

}
