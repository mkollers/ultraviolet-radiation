import { AuthClientConfig } from '@auth0/auth0-angular';
import { Config } from 'src/config';
import { Mock } from 'src/test';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let authClientConfig: Mock<AuthClientConfig>;
  let config: Mock<Config>;

  beforeEach(() => {
    authClientConfig = new Mock<AuthClientConfig>();
    config = new Mock<Config>();
  });

  it('should create the app', () => {
    // Act
    const component = new AppComponent(authClientConfig.instance, config.instance);

    // Assert
    expect(component).toBeTruthy();
  });
});
