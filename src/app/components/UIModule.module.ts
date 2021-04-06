import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MooviInputComponent } from './atomic/atoms/moovi-input/moovi-input.component';
import { VirketButtonComponent } from './atomic/atoms/virket-button/virket-button.component';
import { VirketReatingComponent } from './atomic/atoms/virket-reating/virket-reating.component';
import { VirketFooterMenuComponent } from './atomic/organisms/virket-footer-menu/virket-footer-menu.component';
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
      VirketFooterMenuComponent,
      MooviInputComponent
    ],
    providers: [],
    exports: [
      IonicModule,
      VirketButtonComponent,
      VirketProductThumbComponent,
      VirketHeaderComponent,
      VirketReatingComponent,
      VirketFooterMenuComponent,
      MooviInputComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  })
  export class UIModule {}