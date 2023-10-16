import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { JobHistory } from './job-history';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    JobHistory
  ],
  exports: [
    JobHistory,
  ]
})
export class JobHistoryModule { }