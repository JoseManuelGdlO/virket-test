import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MooviBlockButtonComponent } from './atomic/atoms/moovi-block-button/moovi-block-button.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
      MooviBlockButtonComponent
    ],
    providers: [],
    exports: [
      IonicModule,
      MooviBlockButtonComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class UIModule {}