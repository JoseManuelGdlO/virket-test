import { Routes } from '@angular/router';
import { DetailEventPage } from './detail-event/detail-event.page';
import { NewEventPage } from './new-event/new-event.page';

export const accountRoutes: Routes = [
    {
      path: '',
      children: [
        { path: 'add-event', component: NewEventPage },
        { path: 'detail-event', component: DetailEventPage },
      ],
    },
  ];
