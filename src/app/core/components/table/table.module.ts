import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {TableApiService} from '../../../shared/services/api/table/table-api.service';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TableComponent
  ],
  providers: [
    TableApiService
  ]
})
export class TableModule {
}
