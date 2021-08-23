import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';
import { NoShellComponent } from './components/no-shell/no-shell.component';

@NgModule({
  declarations: [
    NoShellComponent,
    ShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NoShellComponent,
    ShellComponent
  ]
})
export class LayoutModule { }
