import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HasRolePipe } from './pipes/has-role.pipe';
import { InitialsPipe } from './pipes/initials.pipe';
import { NameColorPipe } from './pipes/name-color.pipe';
import { UserNamePipe } from './pipes/user-name.pipe';

@NgModule({
  declarations: [
    HasRolePipe,
    InitialsPipe,
    NameColorPipe,
    UserNamePipe
  ],
  exports: [
    HasRolePipe,
    InitialsPipe,
    NameColorPipe,
    UserNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
