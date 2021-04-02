import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { StorageItem } from "src/app/utilities/storage/storage";
import { AuthBase } from "../auth.base";

@Component({
    selector: 'app-onboarding-page',
    templateUrl: './onboarding.page.html',
    styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage extends AuthBase implements OnInit {

    constructor(
        public modalController: ModalController,
        public storage: StorageItem,
        public router: Router
    ) { 
        super(modalController)
    }

    ngOnInit(): void {
       
    }

    async start(){
        await this.storage.setItem(this.storage.SAW_ONBOARDING, 1)
        await this.modalController.dismiss()
    }

    
   

}