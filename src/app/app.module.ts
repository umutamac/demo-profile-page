import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNav } from './components/layout/side-nav/side-nav';
import { Toolbar } from './components/layout/toolbar/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    SideNav,
    Toolbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
