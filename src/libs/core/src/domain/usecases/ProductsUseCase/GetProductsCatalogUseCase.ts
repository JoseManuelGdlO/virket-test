import { Inject, Injectable } from "@angular/core";
import { ProductResponseModel } from "src/app/models/products.model";
import { ProductsRepository, PRODUCTS_REPOSITORY } from "../../repository/ProductsRepository";

@Injectable()
export class GetProductsCatalogUseCase {
    constructor(
      @Inject(PRODUCTS_REPOSITORY) private productsRepository: ProductsRepository
    ) { }

    getProducts(): Promise<ProductResponseModel> {
        return new Promise((resolve, reject) => {
        this.productsRepository
          .getProducts()
          .subscribe(resolve, reject);
      });
    }

}