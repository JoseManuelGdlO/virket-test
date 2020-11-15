import { Injectable } from '@angular/core';
import { LoginPage } from 'src/app/pages/auth/login/login.page';
import { LoginUseCase } from '../../../domain/usecases/AuthUsesCase/LoginUseCase';
import { BasePresenter } from '../../base.presenter';

@Injectable({
    providedIn: 'root',
  })
  export class LoginPresenter implements BasePresenter {
    private view: any;

    constructor(
      public loginUseCase: LoginUseCase
    ) {}


    setView(component: any){
        this.view = component as LoginPage;
    }

    async login(username: string, password: string): Promise<any> {
        try {
            const response = await this.loginUseCase.login(username, password);
            if (response && response.token) {
                return response;
            } else {
                return null;
            }
        } catch (error) {
            console.error('ERROR IN REQUEST LOGIN', error);
            return null;
        }
    }


  }
