import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLocationsPage } from './new-locations.page';

const routes: Routes = [
  {
    path: '',
    component: NewLocationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLocationsPageRoutingModule {}
