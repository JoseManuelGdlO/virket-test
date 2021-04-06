import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './products.routes';

@NgModule({
    imports: [RouterModule.forChild(productsRoutes)],
    exports: [RouterModule],
  })
  export class ProductsRoutingModule {}