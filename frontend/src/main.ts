import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CONFIG } from '@shared/helper/injection-tokens/config.injection-token';

import { AppModule } from './app/app.module';
import { Config } from './config';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// To make the runtime config available before the app has started, the config is loaded before bootstrapping.
// Using APP_INITIALIZER is not possible, because it not really waits until the request has finished. All other
// services are already constructed, and if you inject the config, you are dealing with an object that hasn't
// really finished. That's the reason the config is loaded at this point.
fetch('config.json')
  .then(config => config.json())
  .then((config: Config) => platformBrowserDynamic([{ provide: CONFIG, useValue: config }]))
  .then(platformRef => platformRef.bootstrapModule(AppModule))
  .catch(err => console.error(err));
