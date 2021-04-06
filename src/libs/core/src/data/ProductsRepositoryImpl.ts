import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductResponseModel } from "src/app/models/products.model";
import { ShoppingCartResponseModel } from "src/app/models/shopping-cart.model";
import { ProductsRepository } from "../domain/repository/ProductsRepository";
import { ApiService } from "./net/ApiService";

@Injectable()
export class ProductsRepositoryImpl implements ProductsRepository {
  private _headers = {};
  private _contenttype = 'content-type';

  constructor(private apiService: ApiService ,private httpClient: HttpClient) { }

  private setHeaders() {
    this._headers[this._contenttype] = 'application/json';
  }

  getShoppingCart( ): Observable<ShoppingCartResponseModel> {
    this.setHeaders();

    return this.httpClient.get<ShoppingCartResponseModel>(
      this.apiService._REMOTE_END_POINTS.URL_GET_SHOPPING_CART,
      {
        headers: this._headers,
      }
    );
  }

  getProducts(): Observable<ProductResponseModel> {
    this.setHeaders();

    return this.httpClient.get<ProductResponseModel>(
      this.apiService._REMOTE_END_POINTS.URL_GET_HOME_PRODUCTS,
      {
        headers: this._headers,
      }
    );
  }
}