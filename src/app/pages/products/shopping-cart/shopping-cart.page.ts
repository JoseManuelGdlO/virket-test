import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ShoppingCartProductModel, ShoppingCartResponseModel } from "src/app/models/shopping-cart.model";
import { ShoppingCartPresenter } from "src/libs/core/src/presentation/presenters/ProductsPresenters/shopping-cart.presenter";
import { ProductsBase } from "../products.base";

@Component({
    selector: 'shopping-cart-page',
    templateUrl: './shopping-cart.page.html',
    styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage extends ProductsBase implements OnInit {

    heightDiv = '267px';
    cart: ShoppingCartResponseModel= {codeMessage: '', data: {products: [], shipping:'', subtotal: '', total: ''}, ok: true}

    constructor(
        public shoppingCartPresenter: ShoppingCartPresenter,
        public modalController: ModalController
    ) {
        super(modalController)
    }

    async ngOnInit() {
        await this.showBaseLodaing();
        await this.getCart();
    }

    async getCart() {
        this.cart = await this.shoppingCartPresenter.getCart();

        this.calculateTotal();
        await this.closeBaseLoading();
        
    }

    clickExpand() {
        if (this.heightDiv === '267px') {
            this.heightDiv = '0px';
        } else {
            this.heightDiv = '267px';
        }
    }

    calculateTotal(){

        this.cart.data.total = '0';
        this.cart.data.subtotal = '0';

        this.cart.data.products.forEach((element: ShoppingCartProductModel) => {
            const priceTotalProduct = String(parseFloat(element.product_price) - parseFloat(element.discount));

            this.cart.data.subtotal = String(parseFloat(priceTotalProduct) + parseFloat(this.cart.data.subtotal));
        });

        this.cart.data.total = String(parseFloat(this.cart.data.subtotal) + parseFloat(this.cart.data.shipping));
    }

    deleteProductCart(product: ShoppingCartProductModel, index: number) {

        const totalprice =  String(parseFloat(product.product_price) - parseFloat(product.discount));
        
        this.cart.data.subtotal = String(parseFloat(this.cart.data.subtotal) - parseFloat(totalprice));
        this.cart.data.total = String(parseFloat(this.cart.data.total) - parseFloat(totalprice));

        this.cart.data.products.splice(index, 1);

    }

}