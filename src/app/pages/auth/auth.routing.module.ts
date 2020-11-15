import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { accountRoutes } from './auth.routes';

@NgModule({
    imports: [RouterModule.forChild(accountRoutes)],
    exports: [RouterModule],
  })
  export class AuthRoutingModule {}