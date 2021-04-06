import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ProductModel, ProductResponseModel } from "src/app/models/products.model";
import { UserModel, UserResponseModel } from "src/app/models/user.model";
import { StorageItem } from "src/app/utilities/storage/storage";
import { HomePresenter } from "src/libs/core/src/presentation/presenters/SessionPresenters/home.presenter";
import { ProductService } from "src/libs/core/src/services/product.service";
import { OnboardingPage } from "../../auth/onboarding/onboarding.page";
import { SessionBase } from "../session.base";

@Component({
    selector: 'app-home-page',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage extends SessionBase implements OnInit {

    userInformation = new UserResponseModel();
    products = new ProductResponseModel();
    userName: string;

    constructor(
        public homePresenter: HomePresenter,
        public modalController: ModalController,
        public storage: StorageItem,
        public productService: ProductService,
        public router: Router
    ) { 
        super(modalController)
    }

    ionViewWillEnter() {
        // this.productService.fillFavoriteProducts();
    }

    async ngOnInit() {
        this.fillData();
        await this.showBaseLodaing();
        this.homePresenter.setView(this);
        await this.getDetailsUser();
        await this.getProducts();
        this.sawOnboarding()
    }

    fillData(){ 
        this.userInformation.data = new UserModel();
        this.userInformation.data.picture = {large: '', medium: '', thumbnail: ''}

        this.products.data = [];
    }

    async getDetailsUser() {
        this.userInformation = await this.homePresenter.getDetailProfile();
        
        this.userName = `Bienvenido, ${(this.userInformation.data.fullName.split(' '))[0]}`;
        
        
    }

    async getProducts() {
        this.products = await this.homePresenter.getProducts();
        this.productService.fillFavoriteProducts(this.products.data);
        await this.closeBaseLoading();
        
    }

    async sawOnboarding(): Promise<void>{
        let response = 0;
        let storageResponse = await this.storage.getItem(this.storage.SAW_ONBOARDING);

        if(storageResponse)
            response = parseInt(storageResponse);

        if(response === 0){
            let modal = await this.modalCtrl.create({
                component: OnboardingPage,
                componentProps: {
                }
            });
            return await modal.present();
        }
        
    }

    openDetail(item: ProductModel) {
        this.productService.queryParam = item;
        this.router.navigateByUrl('/products/detail/2');
    }


}