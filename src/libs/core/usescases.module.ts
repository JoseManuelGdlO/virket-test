import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { LoginUseCase } from './src/domain/usecases/AuthUsesCase/LoginUseCase';

@NgModule({
    providers: [ LoginUseCase, ],
    exports: [ LoginUseCase, ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class UsesCasesModule {}