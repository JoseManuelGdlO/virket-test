import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ProductModel, ProductResponseModel } from "src/app/models/products.model";
import { CatalogPresenter } from "src/libs/core/src/presentation/presenters/ProductsPresenters/catalog.presenter";
import { ProductsBase } from "../products.base";
import * as lodash from 'lodash';
import { ProductService } from "src/libs/core/src/services/product.service";
import { Router } from "@angular/router";

@Component({
    selector: 'product-catalog-page',
    templateUrl: './product-catalog.page.html',
    styleUrls: ['./product-catalog.page.scss'],
})
export class ProductCatalogPage extends ProductsBase implements OnInit {

    products = new Array<ProductModel>();
    originalProducts = new ProductResponseModel();

    classification = []

    slideOpts = {
        initialSlide: 0,
        speed: 400,
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: false,
        slideToClickedSlide: true,
        loop: false
    };

    constructor(
        public catalogPresenter: CatalogPresenter,
        public modalController: ModalController,
        public productService: ProductService,
        public router: Router
    ) {
        super(modalController)
    }

    async ngOnInit() {
        await this.showBaseLodaing();
        await this.getCart();
    }

    async getCart() {
        this.originalProducts = await this.catalogPresenter.getProducts();
        this.products = [...this.originalProducts.data];
        this.fillCategories();
        await this.closeBaseLoading();

    }

    fillCategories() {

        this.classification.push({ name: 'Todos', isSelected: false })
        this.originalProducts.data.forEach(product => {
            if (lodash.findIndex(this.classification, { 'name': product.brand }) === -1) {
                this.classification.push({ name: product.brand, isSelected: false })
            }

        });

    }

    filterCatalog(item: any, selected: boolean) {
        if (String(item.name) === 'Todos') {
            this.classification.forEach(element => {
                element.isSelected = false;
            })
            
             item.isSelected = selected; 
            this.products = [...this.originalProducts.data];
        } else {
            
            item.isSelected = selected; 
            this.classification[0].isSelected = false;
            
            this.products = [];
            this.classification.forEach(element => {
                if(element.isSelected){
                    const newProducts = lodash.filter(this.originalProducts.data, { 'brand': element.name });
                    this.products = lodash.concat(this.products, newProducts);
                }
            })
        }
        
       
    }

    openDetail(item: ProductModel) {
        this.productService.queryParam = item;
        this.router.navigateByUrl('/products/detail');
    }

}