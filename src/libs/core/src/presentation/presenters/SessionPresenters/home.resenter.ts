import { Injectable } from "@angular/core";
import { HomePage } from "src/app/pages/session/home/home.page";
import { BasePresenter } from "../../base.presenter";
import { ProfileUseCase } from '../../../domain/usecases/SessionUseCase/ProfileUseCase';
import { UserResponseModel } from "src/app/models/user.model";
import { HomeProductsUseCase } from "../../../domain/usecases/SessionUseCase/HomeProductsUseCase";
import { ProductResponseModel } from "src/app/models/products.model";

@Injectable({
    providedIn: 'root',
  })
  export class HomePresenter implements BasePresenter {
    private view: any;

    constructor(
      public profileUseCase: ProfileUseCase,
      public homeProductsUseCase: HomeProductsUseCase
    ) {}


    setView(component: any){
        this.view = component as HomePage;
    }

    async getDetailProfile(): Promise<UserResponseModel> {
        try {
            const response = await this.profileUseCase.getDetailProfile();
            if (response.ok) {
                return response;
            } else {
                return null;
            }
        } catch (error) {
            console.error('ERROR IN REQUEST LOGIN', error);
            return null;
        }
    }

    async getProducts(): Promise<ProductResponseModel> {
        try {
            const response = await this.homeProductsUseCase.getProducts();
            if (response.ok) {
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