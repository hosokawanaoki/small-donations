import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DonateRequestComponent } from './donate-request.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [{
  path: '',
  component: DonateRequestComponent,
  children: [
    {
      path: 'request',
      component: RequestComponent,
    },
    {
      path: '',
      redirectTo: 'request',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonateRequestRoutingModule {
}
