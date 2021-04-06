import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { ProductResponseModel } from "src/app/models/products.model";
import { ShoppingCartResponseModel } from "src/app/models/shopping-cart.model";

export interface ProductsRepository {
    getShoppingCart: () => Observable<ShoppingCartResponseModel>;
    getProducts: () => Observable<ProductResponseModel>;
}

export const PRODUCTS_REPOSITORY = new InjectionToken('ProductsRepository');