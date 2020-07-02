import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default/default.module';
import { WidgetsComponent } from './shared/widgets/widgets.component';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
	declarations: [ AppComponent, WidgetsComponent ],
	imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, DefaultModule, MatDividerModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
