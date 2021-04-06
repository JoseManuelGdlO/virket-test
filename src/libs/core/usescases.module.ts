import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { GetCartUseCase } from './src/domain/usecases/ProductsUseCase/GetCartUseCase';
import { GetProductsCatalogUseCase } from './src/domain/usecases/ProductsUseCase/GetProductsCatalogUseCase';
import { HomeProductsUseCase } from './src/domain/usecases/SessionUseCase/HomeProductsUseCase';
import { ProfileUseCase } from './src/domain/usecases/SessionUseCase/ProfileUseCase';

@NgModule({
    providers: [ ProfileUseCase, HomeProductsUseCase, GetCartUseCase, GetProductsCatalogUseCase],
    exports: [  ProfileUseCase, HomeProductsUseCase, GetCartUseCase, GetProductsCatalogUseCase],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class UsesCasesModule {}