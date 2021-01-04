import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MooviBlockButtonComponent } from './atomic/atoms/moovi-block-button/moovi-block-button.component';
import { MooviInputComponent } from './atomic/atoms/moovi-input/moovi-input.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
      MooviBlockButtonComponent,
      MooviInputComponent
    ],
    providers: [],
    exports: [
      IonicModule,
      MooviBlockButtonComponent,
      MooviInputComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class UIModule {}