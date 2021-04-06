import {
    ModuleWithProviders,
    NgModule,
    Optional,
    SkipSelf,
    InjectionToken,
  } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { InjectorModule } from './src/injector/injector.module';
import { ProfileUseCase } from './src/domain/usecases/SessionUseCase/ProfileUseCase';
import { HomeProductsUseCase } from './src/domain/usecases/SessionUseCase/HomeProductsUseCase';
import { GetCartUseCase } from './src/domain/usecases/ProductsUseCase/GetCartUseCase';
import { GetProductsCatalogUseCase } from './src/domain/usecases/ProductsUseCase/GetProductsCatalogUseCase';
export const PlatformLanguageToken = new InjectionToken<string>(
    'PlatformLanguageToken'
  );

@NgModule({
    imports: [CommonModule],
  })
  export class CoreModule {
    // configuredProviders: *required to configure WindowService and others per platform
    static forRoot(
      configuredProviders: Array<any>
    ): ModuleWithProviders<CoreModule> {
      return {
        ngModule: CoreModule,
        providers: [
            ProfileUseCase,
            HomeProductsUseCase,
            GetCartUseCase,
            GetProductsCatalogUseCase,
            InjectorModule,
          {
            provide: APP_BASE_HREF,
            useValue: '/',
          },
          ...configuredProviders,
        ],
      };
    }

    constructor(
      @Optional()
      @SkipSelf()
      parentModule: CoreModule,
    ) {
    }
  }
