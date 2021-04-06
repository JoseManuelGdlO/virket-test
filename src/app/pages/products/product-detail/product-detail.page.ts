import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ProductModel } from "src/app/models/products.model";
import { ShoppingCartProductModel } from "src/app/models/shopping-cart.model";
import { ProductService } from "src/libs/core/src/services/product.service";
import { ProductsBase } from "../products.base";

const FROM_CATALOG = 1;
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

    fontSize: string;
    favoriteIcon = 'assets/icon/favorite_border.svg';
    routeToSend = 'session/home';

    flagCart = false;

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        public productService: ProductService,
        public modalController: ModalController
    ) {
        super(modalController);
    }

    ngOnInit(): void {
        this.productDetail = this.productService.queryParam;
        this.configureBackRoute();
        this.changeSizeTitle();
        this.saveFavorite();
        this.isAddInCart();      
    }

    isAddInCart() {
        this.flagCart = this.productService.isSavedInCart(this.productDetail.id);
    }

    configureBackRoute() {
        const idRoute: number = parseInt(this.route.snapshot.paramMap.get('route'));

        if(idRoute === FROM_CATALOG) {
            this.routeToSend = 'products/catalog';
        }

    }

    changeSizeTitle() {
        if (this.productDetail.product_name.length > 15 && this.productDetail.product_name.length < 20) {
            this.fontSize = '34px';
        } else if (this.productDetail.product_name.length > 21) {
            this.fontSize = '25px';
        } else {
            this.fontSize = '40px';
        }
    }

    goShoppingCart() {
        this.router.navigateByUrl('products/shopping-cart');
    }

    addToFavorite() {

        this.productDetail.is_favorite = !this.productDetail.is_favorite;
        this.saveFavorite();

    }

    saveFavorite() {
        
        if(this.productDetail.is_favorite) {
            this.productService.saveFavorite(this.productDetail.id);
            this.favoriteIcon = 'assets/icon/favorite_red.svg';
        } else {
            this.productService.deleteFavorite(this.productDetail.id);
            this.favoriteIcon = 'assets/icon/favorite_border.svg';
        }
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

        if(!this.flagCart){
            this.productService.deleteCart(productShopping.id)
        } else {
            this.productService.addCartProduct(productShopping);
        }
    }


}