import { ModalController } from "@ionic/angular";
import { LoadingComponent } from "src/app/utilities/loading/loading.component";

export class AuthBase {

    constructor(public modalCtrl: ModalController){}

    async showLodaing() {
        const modal = await this.modalCtrl.create({component: LoadingComponent});
        modal.present();
    }

    closeLoading() {
        this.modalCtrl.dismiss()
    }
}