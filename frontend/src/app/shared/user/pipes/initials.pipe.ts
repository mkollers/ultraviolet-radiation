import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@auth0/auth0-spa-js';

import { UserNamePipe } from './user-name.pipe';

@Pipe({
  name: 'initials'
})
export class InitialsPipe extends UserNamePipe implements PipeTransform {

  transform(value: User | undefined): string {
    const name = super.transform(value);
    let result = '';
    for (const part of name.split(' ')) {
      if (!part.length) continue;
      result += part[0].toUpperCase();
    }

    // Forget about middlenames if there is more than one
    if (result.length > 3) {
      return result[0] + result[result.length - 1];
    }

    return result;
  }

}
