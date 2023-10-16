import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { JobHistoryModule } from './modules/job-history/job-history.module';

// bootstrapApplication(AppComponent,
//   {
//     providers: [
//       provideRouter(appRoutes, withComponentInputBinding())
//     ]
//   }
// );

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    JobHistoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
