import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { LocationSelectorComponent } from './components/location-selector/location-selector.component';

@NgModule({
  declarations: [
    LocationSelectorComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  exports: [
    LocationSelectorComponent
  ]
})
export class LocationModule { }
