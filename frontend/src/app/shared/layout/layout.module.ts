import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NoShellComponent } from './components/no-shell/no-shell.component';
import { ShellComponent } from './components/shell/shell.component';
import { HasRolePipe } from './pipes/has-role.pipe';
import { InitialsPipe } from './pipes/initials.pipe';
import { NameColorPipe } from './pipes/name-color.pipe';
import { UserNamePipe } from './pipes/user-name.pipe';

@NgModule({
  declarations: [
    HasRolePipe,
    HeaderComponent,
    InitialsPipe,
    NameColorPipe,
    NoShellComponent,
    ShellComponent,
    UserNamePipe
  ],
  imports: [
    CommonModule,
    RouterModule,

    // 3rd party
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    HasRolePipe,
    NoShellComponent,
    ShellComponent
  ]
})
export class LayoutModule { }
