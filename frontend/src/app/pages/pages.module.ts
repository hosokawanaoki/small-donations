import { NgModule } from '@angular/core';
import { NbMenuModule, NbButtonModule, NbLayoutModule, NbActionsModule, NbCardModule, NbListModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MapComponent } from "./map/map.component";
import { NavComponent } from "./nav/nav.component";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbLayoutModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbUserModule
  ],
  declarations: [
    PagesComponent,
    MapComponent,
    NavComponent,
  ],
})
export class PagesModule {
}
