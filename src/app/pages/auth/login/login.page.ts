import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPresenter } from 'src/libs/core/src/presentation/presenters/AuthPresenters/login.presenter';
import { AuthBase } from '../auth.base';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends AuthBase implements OnInit {

  constructor(
    public loginPresenter: LoginPresenter,
    public modalCtrl: ModalController
  ) { 
    super(modalCtrl);
    this.showLodaing();
    this.loginPresenter.setView(this);
    this.login('hola', 'hola');
  }

  ngOnInit() {
  }

  async login(username, password){
    const response = await this.loginPresenter.login(username, password);

    if(response) {
      console.log('Welcome');
    } else {
      console.log('ERROR!');
    }
  }

}
