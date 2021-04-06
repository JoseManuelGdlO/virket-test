import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ProductModel } from "src/app/models/products.model";
import { ProductService } from "src/libs/core/src/services/product.service";
import { ProductsBase } from "../products.base";

@Component({
    selector: 'product-detail-page',
    templateUrl: './product-detail.page.html',
    styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage extends ProductsBase implements OnInit {

    productDetail: ProductModel = {
        brand: '',
        colors: [],
        description: '',
        discount: '',
        id: 0,
        is_favorite: false,
        product_image: '',
        product_name: '',
        product_price: '',
        reviews: '',
        score: 0,
        sku: ''
    };

    constructor(
        public router: Router,
        public productService: ProductService,
        public modalController: ModalController
    ) {
        super(modalController);
    }

    ngOnInit(): void {
        this.productDetail = this.productService.queryParam;
        console.log(this.productDetail);
        
    }

    goShoppingCart() {
        this.router.navigateByUrl('products/shopping-cart');
    }


}