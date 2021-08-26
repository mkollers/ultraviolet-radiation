import { AuthClientConfig } from '@auth0/auth0-angular';
import { Config } from 'src/config';
import { Mock } from 'src/test';
import { anything, verify, when } from 'ts-mockito';

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

  it('should set the auth configuration', () => {
    // Arrange
    when(authClientConfig.mock.set(anything())).thenReturn();

    // Act
    new AppComponent(authClientConfig.instance, config.instance);

    // Assert
    verify(authClientConfig.mock.set(anything())).once(); // Todo: Test for exact value config.auth
    expect().nothing(); // ts-mockito will only throw in case of errors -> this is required to avoid expection warnings
  });
});
