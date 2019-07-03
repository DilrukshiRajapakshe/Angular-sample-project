import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavaBarComponent } from './nava-bar/nava-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuColComponent } from './menu-col/menu-col.component';
import { NavBarMenuComponent } from './nav-bar-menu/nav-bar-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    NavaBarComponent,
    MenuColComponent,
    NavBarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
