import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AuthClientConfig } from '@auth0/auth0-angular';
import { CONFIG } from '@shared/helper/injection-tokens/config.injection-token';
import { Config } from 'src/config';

@Component({
  selector: 'uv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    authClientConfig: AuthClientConfig,
    @Inject(CONFIG) config: Config,
  ) {
    // Set the auth configuration with the dynamic configuration object instead of
    // hard coded values inside `forRoot(...)` in the module file. This allows us 
    // to set config values loaded from the server
    authClientConfig.set(config.auth);
  }
}
