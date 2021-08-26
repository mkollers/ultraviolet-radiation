import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LocationModule } from '@shared/location/location.module';
import { UserModule } from '@shared/user/user.module';
import { ChartModule } from 'angular-highcharts';

import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,

    // 3rd party
    MatButtonToggleModule,
    ChartModule,

    // Custom
    LocationModule,
    UserModule
  ]
})
export class LandingPageModule { }
