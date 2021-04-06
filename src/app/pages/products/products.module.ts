import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/components/shared.module';
import { ProductCatalogPage } from './product-catalog/product-catalog.page';
import { ProductDetailPage } from './product-detail/product-detail.page';
import { ProductsRoutingModule } from './products.routing.module';
import { ShoppingCartPage } from './shopping-cart/shopping-cart.page';

@NgModule({
    declarations: [
      ShoppingCartPage,
      ProductCatalogPage,
      ProductDetailPage
    ],
    providers: [],
    imports: [
      SharedModule,
      CommonModule,
      IonicModule,
      FormsModule,
      ReactiveFormsModule,
      ProductsRoutingModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class ProductsModule {}