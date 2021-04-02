import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRepositoryImpl } from '../data/AuthRepositoryImpl';
import { SessionRepositoryImpl } from '../data/SessionRepositoryImpl';
import { AUTH_REPOSITORY } from '../domain/repository/AuthRepository';
import { SESSION_REPOSITORY } from '../domain/repository/SessionRepository';

@NgModule({
    declarations: [],
    providers: [
      { provide: SESSION_REPOSITORY, useClass: SessionRepositoryImpl},
      { provide: AUTH_REPOSITORY, useClass: AuthRepositoryImpl},
    ],
    imports: [
      CommonModule
    ]
  })

  export class InjectorModule { }
