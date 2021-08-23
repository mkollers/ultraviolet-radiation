import { AuthService } from '@auth0/auth0-angular';
import { User } from '@auth0/auth0-spa-js';
import * as faker from 'faker';
import { BehaviorSubject } from 'rxjs';
import { Mock } from 'src/test';
import { anything, verify, when } from 'ts-mockito';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let authService: Mock<AuthService>;
  let window: Mock<Window>;

  beforeEach(() => {
    authService = new Mock<AuthService>();
    window = new Mock<Window>();

    when(authService.mock.user$).thenReturn(new BehaviorSubject<User>({
      family_name: faker.name.lastName(),
      email: faker.internet.email(),
      given_name: faker.name.firstName()
    }));
  });

  it('should create', () => {
    // Act
    const component = new HeaderComponent(authService.instance, window.instance);

    // Assert
    expect(component).toBeTruthy();
  });

  describe('logOut', () => {
    it('should log out user', () => {
      // Arrange
      when(authService.mock.logout(anything())).thenReturn();
      const component = new HeaderComponent(authService.instance, window.instance);

      // Act
      component.logOut();

      // Assert
      verify(authService.mock.logout(anything())).called();
      expect().nothing();
    });
  });
});
