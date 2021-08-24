import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from '@shared/charts/charts.module';
import { LocationModule } from '@shared/location/location.module';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,

    // Custom
    ChartsModule, 
    LocationModule
  ]
})
export class LandingPageModule { }
