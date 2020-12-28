import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { Graph1Module } from './graph-1/graph-1.module';
import { Graph2Module } from './graph-2/graph-2.module';
import { Graph3Module } from './graph-3/graph-3.module';
import { Graph4Module } from './graph-4/graph-4.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { Graph5Module } from './graph-5/graph-5.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        BrowserAnimationsModule,
        SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/'),
                deps: [HttpClient]
            }
        }),
        Graph1Module,
        Graph2Module,
        Graph3Module,
        Graph4Module,
        Graph5Module,
        HomeModule,
        AppRoutingModule,
        CoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
