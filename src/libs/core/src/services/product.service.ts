import { Injectable } from "@angular/core";
import { ProductModel } from "src/app/models/products.model";
import * as lodash from 'lodash';
import { ShoppingCartProductModel } from "src/app/models/shopping-cart.model";

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
  
    queryParam: ProductModel;

    favoriteProducts = new Array<number>();

    cartProducts = new Array<any>();

    constructor(
    ) {}

    saveFavorite(idProduct: number): void {
      this.favoriteProducts.push(idProduct);
    }

    deleteFavorite(idProduct: number) {
      const index = lodash.findIndex(this.favoriteProducts, idProduct);
      this.favoriteProducts.splice(index, 1);
    }

    fillFavoriteProducts(products: Array<any>): Array<any> {
      this.favoriteProducts.forEach( idProduct => {
        products[idProduct].is_favorite = true;
      });
      
      return products;
    }

    isSavedInCart(idProduct): boolean {
      const index: number = lodash.findIndex(this.cartProducts,  {'id': idProduct});

      if(index !== -1) {
        return true;
      }

      return false;
    }

    addCartProduct(product: ShoppingCartProductModel) {
        this.cartProducts.push(product);
    }

    deleteCart(idProduct: number) {
      const index: number = lodash.findIndex(this.cartProducts, {'id': idProduct});

      if(index !== -1) {
        this.cartProducts.splice(index, 1);
      }
      
    }

    fillCart(products: Array<ShoppingCartProductModel>): Array<ShoppingCartProductModel> {
      this.cartProducts.forEach((product: ShoppingCartProductModel) => {
        const index: number =  lodash.findIndex(products, { 'id': product.id });
        if(index === -1) {
          products.push(product);
        }
      });

      return products;
    }



  }