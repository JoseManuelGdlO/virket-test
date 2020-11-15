import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRepositoryImpl } from '../data/AuthRepositoryImpl';
import { AUTH_REPOSITORY } from '../domain/repository/AuthRepository';

@NgModule({
    declarations: [],
    providers: [,
      { provide: AUTH_REPOSITORY, useClass: AuthRepositoryImpl},
    ],
    imports: [
      CommonModule
    ]
  })

  export class InjectorModule { }
