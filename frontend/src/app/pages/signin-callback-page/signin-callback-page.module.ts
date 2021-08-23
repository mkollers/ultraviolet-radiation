import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninCallbackPageRoutingModule } from './signin-callback-page-routing.module';
import { SigninCallbackPageComponent } from './signin-callback-page.component';

@NgModule({
  declarations: [
    SigninCallbackPageComponent
  ],
  imports: [
    CommonModule,
    SigninCallbackPageRoutingModule
  ]
})
export class SigninCallbackPageModule { }
