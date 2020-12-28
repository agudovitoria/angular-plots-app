import { NgModule } from '@angular/core';
import { AppBarModule } from './components/app-bar/app-bar.module';
import { LeftSidenavModule } from './components/left-sidenav/left-sidenav.module';
import { DialogModule } from './components/dialog/dialog.module';
import { TableModule } from './components/table/table.module';
import { ToolBarModule } from './components/tool-bar/tool-bar.module';
import { DataService } from './data.service';
import { InspectionScopeSelectorModule } from './components/inpection-scope-selector/inspection-scope-selector.module';

@NgModule({
    imports: [
        AppBarModule,
        LeftSidenavModule,
        DialogModule,
        TableModule,
        ToolBarModule,
        InspectionScopeSelectorModule,
    ],
    exports: [
        AppBarModule,
        LeftSidenavModule,
        DialogModule,
        TableModule,
        ToolBarModule,
        InspectionScopeSelectorModule,
    ],
    providers: [
        DataService
    ]
})
export class CoreModule {
}
