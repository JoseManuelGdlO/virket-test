import { ModalController } from "@ionic/angular";
import { LoadingComponent } from "src/app/utilities/loading/loading.component";

export class AuthBase {

    constructor(public modalCtrl: ModalController){}

    async showBaseLodaing() {
        const modal = await this.modalCtrl.create({component: LoadingComponent, backdropDismiss: false});
        modal.present();
    }

    closeBaseLoading() {
        this.modalCtrl.dismiss()
    }
}