import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { LoginUseCase } from './src/domain/usecases/AuthUsesCase/LoginUseCase';
import { HomeProductsUseCase } from './src/domain/usecases/SessionUseCase/HomeProductsUseCase';
import { ProfileUseCase } from './src/domain/usecases/SessionUseCase/ProfileUseCase';

@NgModule({
    providers: [ LoginUseCase, ProfileUseCase, HomeProductsUseCase],
    exports: [ LoginUseCase, ProfileUseCase, HomeProductsUseCase],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class UsesCasesModule {}