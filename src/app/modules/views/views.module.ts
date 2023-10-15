import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Main } from './main/main';
import { Profile } from './profile/profile';
import { List } from './list/list';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        Main,
        List,
        Profile,
    ],
    exports: [
        Main,
        List, 
        Profile,
    ]
})
export class ViewsModule { }