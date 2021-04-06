import { Injectable } from "@angular/core";
import { ProductResponseModel } from "src/app/models/products.model";
import { ProductCatalogPage } from "src/app/pages/products/product-catalog/product-catalog.page";
import { GetProductsCatalogUseCase } from "../../../domain/usecases/ProductsUseCase/GetProductsCatalogUseCase";
import { BasePresenter } from "../../base.presenter";

@Injectable({
    providedIn: 'root',
  })
  export class CatalogPresenter implements BasePresenter {
    private view: any;

    constructor(
        public getCartUseCase: GetProductsCatalogUseCase
    ) {}


    setView(component: any){
        this.view = component as ProductCatalogPage;
    }

    async getProducts(): Promise<ProductResponseModel> {
        try {
            const response = await this.getCartUseCase.getProducts();
            if (response.ok) {
                return response;
            } else {
                return null;
            }
        } catch (error) {
            console.error('ERROR IN REQUEST LOGIN', error);
            return null;
        }
    }

}