import { Injectable } from '@angular/core';
import { BASE_ROUTE } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
  })
  export class ApiService {
    public _REMOTE_END_POINTS = {
        URL_GET_ACCOUNT_PARAMS: `${BASE_ROUTE}/auth/login`,
    };
  }
