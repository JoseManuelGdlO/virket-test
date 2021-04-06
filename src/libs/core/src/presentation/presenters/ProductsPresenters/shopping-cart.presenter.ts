import { Injectable } from "@angular/core";
import { ProductResponseModel } from "src/app/models/products.model";
import { ShoppingCartResponseModel } from "src/app/models/shopping-cart.model";
import { ShoppingCartPage } from "src/app/pages/products/shopping-cart/shopping-cart.page";
import { GetCartUseCase } from "../../../domain/usecases/ProductsUseCase/GetCartUseCase";
import { BasePresenter } from "../../base.presenter";

@Injectable({
    providedIn: 'root',
  })
  export class ShoppingCartPresenter implements BasePresenter {
    private view: any;

    constructor(
        public getCartUseCase: GetCartUseCase
    ) {}


    setView(component: any){
        this.view = component as ShoppingCartPage;
    }

    async getCart(): Promise<ShoppingCartResponseModel> {
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