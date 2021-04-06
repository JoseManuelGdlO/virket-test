import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsRepositoryImpl } from '../data/ProductsRepositoryImpl';
import { SessionRepositoryImpl } from '../data/SessionRepositoryImpl';
import { PRODUCTS_REPOSITORY } from '../domain/repository/ProductsRepository';
import { SESSION_REPOSITORY } from '../domain/repository/SessionRepository';

@NgModule({
    declarations: [],
    providers: [
      { provide: SESSION_REPOSITORY, useClass: SessionRepositoryImpl},
      { provide: PRODUCTS_REPOSITORY, useClass: ProductsRepositoryImpl},
    ],
    imports: [
      CommonModule
    ]
  })

  export class InjectorModule { }
