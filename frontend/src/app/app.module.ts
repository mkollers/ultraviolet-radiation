import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { STORAGE } from './shared/helper/injection-tokens/storage.injection-token';
import { LayoutModule } from './shared/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // 3rd party
    AuthModule.forRoot({
      domain: 'ultraviolet-radiation.eu.auth0.com',
      clientId: 'mpl5sCivheIoltZgGNMrSkxrx4gmaiYA',
      redirectUri: `${location.origin}/signin-callback`
    }),

    // Custom
    LayoutModule
  ],
  providers: [
    { provide: STORAGE, useValue: localStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
