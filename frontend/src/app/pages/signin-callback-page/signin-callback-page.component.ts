import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { STORAGE } from '@shared/helper/injection-tokens/storage.injection-token';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'uv-signin-callback-page',
  templateUrl: './signin-callback-page.component.html',
  styleUrls: ['./signin-callback-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninCallbackPageComponent {

  constructor(
    authService: AuthService,
    router: Router,
    @Inject(STORAGE) storage: Storage
  ) {
    const url = storage.getItem('login.redirect') || '';
    firstValueFrom(authService.handleRedirectCallback())
      .then(() => router.navigateByUrl(url))
      .catch(err => console.error(err));
  }

}
