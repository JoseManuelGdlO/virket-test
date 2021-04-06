import { Injectable } from '@angular/core';
import { BASE_ROUTE } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
  })
  export class ApiService {
    public _REMOTE_END_POINTS = {
        URL_GET_PROFILE_DATA_USER: `${BASE_ROUTE}/82b8143c-f08a-4c55-b84f-05bc502d5c08`,
        URL_GET_HOME_PRODUCTS: `${BASE_ROUTE}/11f7165c-ea13-4ca6-8748-ca8bf94b5de5`,
        URL_GET_SHOPPING_CART: `${BASE_ROUTE}/b54da230-99a1-48a0-b826-9b2f50a2bbb7`,
    };
  }
