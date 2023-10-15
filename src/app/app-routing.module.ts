import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewsModule } from './modules/views/views.module';
import { List } from './modules/views/list/list';
import { Profile } from './modules/views/profile/profile';
import { NotFound } from './modules/views/not-found/not-found';



const routes: Routes = [
  { path: 'profile', component: List },
  { path: 'profile/:userId', component: Profile },
  { path: '**', component: NotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
