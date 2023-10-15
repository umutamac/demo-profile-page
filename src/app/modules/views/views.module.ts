import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { List } from './list/list';
import { Profile } from './profile/profile';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
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