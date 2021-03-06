import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/components/shared.module';
import { AuthRoutingModule } from './auth.routing.module';
import { OnboardingPage } from './onboarding/onboarding.page';

@NgModule({
    declarations: [
        OnboardingPage
    ],
    providers: [],
    imports: [
      SharedModule,
      CommonModule,
      IonicModule,
      FormsModule,
      ReactiveFormsModule,
      AuthRoutingModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class AuthModule {}