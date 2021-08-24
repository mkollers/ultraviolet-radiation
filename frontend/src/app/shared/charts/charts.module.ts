import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { LineChartComponent } from './components/uv-chart/line-chart.component';

@NgModule({
  declarations: [
    LineChartComponent
  ],
  imports: [
    CommonModule,

    // 3rd party
    ChartModule
  ], exports: [
    LineChartComponent
  ]
})
export class ChartsModule { }
