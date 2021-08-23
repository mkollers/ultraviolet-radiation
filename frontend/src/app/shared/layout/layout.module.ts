import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { UserModule } from '@shared/user/user.module';

import { HeaderComponent } from './components/header/header.component';
import { NoShellComponent } from './components/no-shell/no-shell.component';
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NoShellComponent,
    ShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    // 3rd party
    MatButtonModule,
    MatMenuModule,

    // Custom
    UserModule
  ],
  exports: [
    NoShellComponent,
    ShellComponent
  ]
})
export class LayoutModule { }
