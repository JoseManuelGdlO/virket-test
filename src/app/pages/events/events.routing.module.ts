import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { accountRoutes } from './events.routes';

@NgModule({
    imports: [RouterModule.forChild(accountRoutes)],
    exports: [RouterModule],
  })
  export class EventsRoutingModule {}