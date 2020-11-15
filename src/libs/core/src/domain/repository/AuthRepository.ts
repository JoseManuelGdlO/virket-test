import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';


export interface AuthRepository {
    login: (username, password) => Observable<any>;
}

export const AUTH_REPOSITORY = new InjectionToken('AuthRepository');
