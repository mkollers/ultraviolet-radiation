import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChartsModule } from '@shared/charts/charts.module';
import { LocationModule } from '@shared/location/location.module';
import { UserModule } from '@shared/user/user.module';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,

    // 3rd party
    MatButtonToggleModule,

    // Custom
    ChartsModule,
    LocationModule,
    UserModule
  ]
})
export class LandingPageModule { }
