import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';

const appRoutes: Routes = [
  { path: 'applications', component: ApplicationDetailComponent },
  { path: 'resources', component: ResourceDetailComponent },
  { path: '', redirectTo: '/applications', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ApplicationDetailComponent,
    ResourceDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
