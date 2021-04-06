import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
    selector: 'virket-footer-menu',
    templateUrl: './virket-footer-menu.component.html',
    styleUrls: ['./virket-footer-menu.component.scss'],
  })
  export class VirketFooterMenuComponent {
  
    constructor(
      public router: Router,
      public alertController: AlertController,
    ) {}
  
    ionViewWillEnter() {
      this.refreshAppointments();
    }
  
    refreshAppointments(): void {
    }

    sendExplore(){
       this.router.navigateByUrl('session/home') 
    }

    shoppingCart() {
        this.router.navigateByUrl('products/shopping-cart')
    }

    goCatalog(){
        this.router.navigateByUrl('products/catalog')
    }
  
  
  }
  