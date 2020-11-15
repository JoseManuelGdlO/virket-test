import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
    ],
    providers: [],
    exports: [
      IonicModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class UIModule {}