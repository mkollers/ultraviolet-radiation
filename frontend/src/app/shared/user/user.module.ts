import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNamePipe } from './pipes/user-name.pipe';
import { InitialsPipe } from './pipes/initials.pipe';
import { NameColorPipe } from './pipes/name-color.pipe';

@NgModule({
  declarations: [
    InitialsPipe,
    NameColorPipe,
    UserNamePipe
  ],
  exports: [
    InitialsPipe,
    NameColorPipe,
    UserNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
