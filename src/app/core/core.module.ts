import { NgModule } from '@angular/core';
import { AppBarModule } from './components/app-bar/app-bar.module';
import { LeftSidenavModule } from './components/left-sidenav/left-sidenav.module';
import { DialogModule } from './components/dialog/dialog.module';
import { TableModule } from './components/table/table.module';
import { ToolBarModule } from './components/tool-bar/tool-bar.module';
import { DataService } from './data.service';
import { InspectionScopeSelectorModule } from './components/inpection-scope-selector/inspection-scope-selector.module';
import { PlotSelectorModule } from './components/plot-selector/plot-selector.module';

@NgModule({
    imports: [
        AppBarModule,
        LeftSidenavModule,
        DialogModule,
        TableModule,
        ToolBarModule,
        InspectionScopeSelectorModule,
        PlotSelectorModule
    ],
    exports: [
        AppBarModule,
        LeftSidenavModule,
        DialogModule,
        TableModule,
        ToolBarModule,
        InspectionScopeSelectorModule,
        PlotSelectorModule
    ],
    providers: [
        DataService
    ]
})
export class CoreModule {
}
