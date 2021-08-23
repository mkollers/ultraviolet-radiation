import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '@auth0/auth0-spa-js';
import { WINDOW } from '@shared/helper/injection-tokens/window.injection-token';
import { Observable } from 'rxjs';

@Component({
  selector: 'uv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  user$: Observable<User | null | undefined>;

  constructor(
    private _authService: AuthService,
    @Inject(WINDOW) private _window: Window // eslint-disable-line @typescript-eslint/no-unused-vars
  ) {
    this.user$ = _authService.user$;
  }

  logOut() {
    this._authService.logout({
      returnTo: `${this._window.origin}`
    });
  }
}
