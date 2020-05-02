import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-request',
  styleUrls: ['donate-request.component.scss'],
  template: `
    <full-screan-layout>
      <router-outlet></router-outlet>
    </full-screan-layout>
  `,
})
export class DonateRequestComponent {
}
