import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request/request.component';
import { DonateRequestRoutingModule } from './donate-request-routing.module';
import { DonateRequestComponent } from './donate-request.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbCardModule, NbMenuModule, NbButtonModule, NbIconModule, NbInputModule, NbCheckboxModule } from '@nebular/theme';

@NgModule({

  imports: [
    CommonModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    DonateRequestRoutingModule,
    NbCheckboxModule,
  ],
  declarations: [
    RequestComponent,
    DonateRequestComponent
  ]
})
export class DonateRequestModule { }
