import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MooviInputComponent } from './atomic/atoms/moovi-input/moovi-input.component';
import { VirketButtonComponent } from './atomic/atoms/virket-button/virket-button.component';
import { VirketReatingComponent } from './atomic/atoms/virket-reating/virket-reating.component';
import { VirketHeaderComponent } from './atomic/organisms/virket-header/virket-header.component';
import { VirketProductThumbComponent } from './atomic/organisms/virket-product-thumb/virket-product-thumb.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
      VirketButtonComponent,
      VirketHeaderComponent,
      VirketProductThumbComponent,
      VirketReatingComponent,
      MooviInputComponent
    ],
    providers: [],
    exports: [
      IonicModule,
      VirketButtonComponent,
      VirketProductThumbComponent,
      VirketHeaderComponent,
      VirketReatingComponent,
      MooviInputComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class UIModule {}