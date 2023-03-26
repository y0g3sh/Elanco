import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';

const routes: Routes = [
  { path: 'applications', component: ApplicationDetailComponent },
  { path: 'resources', component: ResourceDetailComponent },
  { path: '', redirectTo: '/applications', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
