import { Routes } from '@angular/router';
import { OnboardingPage } from './onboarding/onboarding.page';

export const accountRoutes: Routes = [
    {
      path: '',
      children: [
        { path: 'onboarding', component: OnboardingPage },
      ],
    },
  ];
