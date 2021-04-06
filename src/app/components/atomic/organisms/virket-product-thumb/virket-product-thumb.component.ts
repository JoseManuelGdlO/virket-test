import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { ProductModel } from "src/app/models/products.model";
import { ShoppingCartProductModel } from "src/app/models/shopping-cart.model";
import { ProductService } from "src/libs/core/src/services/product.service";

@Component({
  selector: 'virket-product-thumb',
  templateUrl: './virket-product-thumb.component.html',
  styleUrls: ['./virket-product-thumb.component.scss'],
})
export class VirketProductThumbComponent implements OnInit {

  @Input() brand: string;
  @Input() name: string;
  @Input() productImage: string;
  @Input() total: string;
  @Input() rating: number;
  @Input() isFavorite = false;
  @Output() onDetail = new EventEmitter<boolean>();

  @Input() productDetail: ProductModel;

  heightOptions = '0';
  displayOptions = 'none';
  flagCart = false;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.isSavedInCart(this.productDetail.id);
  }

  goProduct() {
    this.onDetail.emit(true);
  }

  showOptions() {
    if (this.heightOptions === '175px') {
      this.heightOptions = '0';
      this.displayOptions = 'none'
    } else {
      this.heightOptions = '175px';
      this.displayOptions = '';
    }
  }

  addFavorite() {
    this.isFavorite = !this.isFavorite
    if (this.isFavorite) {
      this.productService.saveFavorite(this.productDetail.id);
    } else {
      this.productService.deleteFavorite(this.productDetail.id);
    }
    this.showOptions()
  }

  addToCart() {

    this.flagCart = !this.flagCart;

    const productShopping: ShoppingCartProductModel = {
      brand: this.productDetail.brand,
      colors: this.productDetail.colors[0],
      color: this.productDetail.colors[0],
      description: this.productDetail.description,
      discount: this.productDetail.discount,
      id: this.productDetail.id,
      is_favorite: this.productDetail.is_favorite,
      product_image: this.productDetail.product_image,
      product_name: this.productDetail.product_name,
      product_price: this.productDetail.product_price,
      reviews: this.productDetail.reviews,
      score: this.productDetail.score,
      sku: this.productDetail.sku
    }

    if (!this.flagCart) {
      this.productService.deleteCart(productShopping.id)
    } else {
      this.productService.addCartProduct(productShopping);
    }
    this.showOptions()
  }

}