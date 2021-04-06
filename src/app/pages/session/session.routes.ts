import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const sessionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomePage },
    ],
  },
];
