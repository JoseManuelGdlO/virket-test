import { Injectable } from "@angular/core";
import { ProductModel } from "src/app/models/products.model";

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
  
    queryParam: ProductModel;

    constructor(
    ) {}
  }