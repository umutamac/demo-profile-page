import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideNav } from './side-nav/side-nav';
import { Toolbar } from './toolbar/toolbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SideNav,
    Toolbar
  ],
  exports: [
    SideNav,
    Toolbar
  ]
})
export class LayoutModule { }