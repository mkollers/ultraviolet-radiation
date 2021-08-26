import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'hasRole'
})
export class HasRolePipe implements PipeTransform {

  /* eslint-disable no-unused-vars */
  constructor(private _authService: AuthService) { }

  transform(role: string): Observable<boolean> {
    return this._authService.user$.pipe(
      map(user => user ? user['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] : []),
      map((roles: string[]) => roles.includes(role))
    );
  }

}
