import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/components/shared.module';
import { DetailEventPage } from './detail-event/detail-event.page';
import { EventsRoutingModule } from './events.routing.module';
import { NewEventPage } from './new-event/new-event.page';

@NgModule({
    declarations: [
        NewEventPage,
        DetailEventPage
    ],
    providers: [],
    imports: [
      SharedModule,
      CommonModule,
      IonicModule,
      FormsModule,
      ReactiveFormsModule,
      EventsRoutingModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class EventsModule {}