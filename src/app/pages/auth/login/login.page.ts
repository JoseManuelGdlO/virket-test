import { Component, OnInit } from '@angular/core';
import { LoginPresenter } from 'src/libs/core/src/presentation/presenters/AuthPresenters/login.presenter';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public loginPresenter: LoginPresenter
  ) { 
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
