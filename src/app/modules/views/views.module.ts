import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { List } from './list/list';
import { Profile } from './profile/profile';
import { JobHistoryModule } from '../job-history/job-history.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        JobHistoryModule
    ],
    declarations: [
        List,
        Profile,
    ],
    exports: [
        List,
        Profile,
    ]
})
export class ViewsModule { }