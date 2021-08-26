import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { DataAccessModule } from '@shared/data-access/data-access.module';
import { WINDOW } from '@shared/helper/injection-tokens/window.injection-token';

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
    BrowserAnimationsModule,
    AppRoutingModule,

    // 3rd party
    AuthModule.forRoot(), // Configuration is done inside app component

    // Custom
    DataAccessModule,
    LayoutModule
  ],
  providers: [
    // Inject global objects to make mocking in unit tests possible
    { provide: STORAGE, useValue: localStorage },
    { provide: WINDOW, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
