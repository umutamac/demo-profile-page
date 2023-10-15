import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewsModule } from './modules/views/views.module';
import { Main } from './modules/views/main/main';
import { Profile } from './modules/views/profile/profile';
import { List } from './modules/views/list/list';


const routes: Routes = [
  { path: '', component: Main },
  // { path: 'profile', component: Profile, data: { id: 1 } },
  { path: 'profile', pathMatch: 'full', component: List  },
  { path: 'profile/:id', component: Profile }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
