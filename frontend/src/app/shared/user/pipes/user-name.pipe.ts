import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@auth0/auth0-spa-js';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: User | undefined): string {
    if (!value) {
      return '';
    }
    if (value.given_name && value.family_name) {
      return `${value.given_name} ${value.family_name}`;
    }
    if (value.email) {
      return value.email;
    }
    return 'Unknown';
  }
}
