import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { ProductResponseModel } from "src/app/models/products.model";
import { UserResponseModel } from "src/app/models/user.model";

export interface SessionRepository {
    getProfileDetails: () => Observable<UserResponseModel>;
    getProducts: () => Observable<ProductResponseModel>;
}

export const SESSION_REPOSITORY = new InjectionToken('SessionRepository');