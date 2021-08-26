import { fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { RedirectLoginResult } from '@auth0/auth0-spa-js';
import * as faker from 'faker';
import { of, throwError } from 'rxjs';
import { Mock } from 'src/test';
import { verify, when } from 'ts-mockito';

import { SigninCallbackPageComponent } from './signin-callback-page.component';

describe('SigninCallbackPageComponent', () => {
  let authService: Mock<AuthService>;
  let router: Mock<Router>;
  let storage: Mock<Storage>;

  beforeEach(() => {
    authService = new Mock<AuthService>();
    router = new Mock<Router>();
    storage = new Mock<Storage>();
  });

  it('should create', () => {
    // Arramge
    when(authService.mock.handleRedirectCallback()).thenReturn(of({ appState: undefined } as RedirectLoginResult));

    // Act
    const component = new SigninCallbackPageComponent(authService.instance, router.instance, storage.instance);

    // Assert
    expect(component).toBeTruthy();
  });

  it('should redirect to previous state', fakeAsync(() => {
    // Arrange
    const url = faker.internet.url();
    when(storage.mock.getItem('login.redirect')).thenReturn(url);
    when(authService.mock.handleRedirectCallback()).thenReturn(of({ appState: undefined } as RedirectLoginResult));
    when(router.mock.navigateByUrl(url)).thenReturn();

    // Act
    new SigninCallbackPageComponent(authService.instance, router.instance, storage.instance);
    tick();

    // Assert
    verify(router.mock.navigateByUrl(url)).once();
    expect().nothing(); // ts-mockito will only throw in case of errors -> this is required to avoid expection warnings
  }));

  it('should log error', fakeAsync(() => {
    // Arrange
    const err = new Error('graphics card would rather produce sounds');
    when(authService.mock.handleRedirectCallback()).thenReturn(throwError(() => err));
    spyOn(console, 'error').and.stub();

    // Act
    new SigninCallbackPageComponent(authService.instance, router.instance, storage.instance);
    tick();

    // Assert
    expect(console.error).toHaveBeenCalledWith(err);
  }));

});
