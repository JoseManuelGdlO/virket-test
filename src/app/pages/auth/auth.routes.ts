import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { RecoveryPasswordPage } from './recovery-password/recovery-password.page';

export const accountRoutes: Routes = [
    {
      path: '',
      children: [
        { path: 'login', component: LoginPage },
        { path: 'recovery-password', component: RecoveryPasswordPage },
      ],
    },
  ];
