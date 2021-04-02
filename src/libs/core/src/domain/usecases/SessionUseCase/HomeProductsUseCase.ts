import { Inject, Injectable } from "@angular/core";
import { ProductResponseModel } from "src/app/models/products.model";
import { SessionRepository, SESSION_REPOSITORY } from "../../repository/SessionRepository";

@Injectable()
export class HomeProductsUseCase {
    constructor(
      @Inject(SESSION_REPOSITORY) private sessionRepository: SessionRepository
    ) { }

    getProducts(): Promise<ProductResponseModel> {
        return new Promise((resolve, reject) => {
        this.sessionRepository
          .getProducts()
          .subscribe(resolve, reject);
      });
    }

}