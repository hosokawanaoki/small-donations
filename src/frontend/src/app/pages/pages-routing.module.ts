import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'map',
      component: MapComponent,
    },
    {
      path: '',
      redirectTo: 'map',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
