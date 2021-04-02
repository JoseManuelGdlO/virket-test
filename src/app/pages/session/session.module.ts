import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/components/shared.module';
import { HomePage } from './home/home.page';
import { SessionRoutingModule } from './session.routing.module';

@NgModule({
    declarations: [
      HomePage
    ],
    providers: [],
    imports: [
      SharedModule,
      CommonModule,
      IonicModule,
      FormsModule,
      ReactiveFormsModule,
      SessionRoutingModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class SessionModule {}