import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPage } from './components/main-page/main-page';
import { Profile } from './components/profile/profile';


const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'profile', component: Profile },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
