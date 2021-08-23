import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { NoShellComponent } from './shared/layout/components/no-shell/no-shell.component';
import { ShellComponent } from './shared/layout/components/shell/shell.component';

const routes: Routes = [
  {
    path: 'signin-callback',
    component: NoShellComponent,
    loadChildren: () => import('./pages/signin-callback-page/signin-callback-page.module').then(m => m.SigninCallbackPageModule)
  },
  {
    path: '',
    component: ShellComponent,
    loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule),
    canLoad: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
