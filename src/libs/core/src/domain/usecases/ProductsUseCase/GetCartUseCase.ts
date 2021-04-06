import { Inject, Injectable } from "@angular/core";
import { ShoppingCartResponseModel } from "src/app/models/shopping-cart.model";
import { ProductsRepository, PRODUCTS_REPOSITORY } from "../../repository/ProductsRepository";

@Injectable()
export class GetCartUseCase {
    constructor(
      @Inject(PRODUCTS_REPOSITORY) private productsRepository: ProductsRepository
    ) { }

    getProducts(): Promise<ShoppingCartResponseModel> {
        return new Promise((resolve, reject) => {
        this.productsRepository
          .getShoppingCart()
          .subscribe(resolve, reject);
      });
    }

}