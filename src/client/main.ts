import 'reflect-metadata';
import 'angular';
import { platformBrowserDynamic } from 'ng-metadata/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from 'ng-metadata/core';

platformBrowserDynamic().bootstrapModule(AppModule);