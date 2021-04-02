import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ProductResponseModel } from "src/app/models/products.model";
import { UserModel, UserResponseModel } from "src/app/models/user.model";
import { StorageItem } from "src/app/utilities/storage/storage";
import { HomePresenter } from "src/libs/core/src/presentation/presenters/SessionPresenters/home.resenter";
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
        public router: Router
    ) { 
        super(modalController)
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
        await this.closeBaseLoading();
        
    }

    async getProducts() {
        this.products = await this.homePresenter.getProducts();
        console.log(this.products);
        
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


}