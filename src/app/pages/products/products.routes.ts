import { Routes } from '@angular/router';
import { ProductCatalogPage } from './product-catalog/product-catalog.page';
import { ProductDetailPage } from './product-detail/product-detail.page';
import { ShoppingCartPage } from './shopping-cart/shopping-cart.page';

export const productsRoutes: Routes = [
    {
      path: '',
      children: [
        { path: 'shopping-cart', component: ShoppingCartPage },
        { path: 'catalog', component: ProductCatalogPage },
        { path: 'detail/:route', component: ProductDetailPage },
      ],
    },
  ];
