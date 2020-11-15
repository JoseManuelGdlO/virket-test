import { Inject, Injectable } from '@angular/core';
import { AuthRepository, AUTH_REPOSITORY } from '../../repository/AuthRepository';

@Injectable()
export class LoginUseCase {
    constructor(
      @Inject(AUTH_REPOSITORY) private authRepository: AuthRepository
    ) { }

    login(
      username: string,
      password: string
    ): Promise<any> {
        return new Promise((resolve, reject) => {
        this.authRepository
          .login(username, password)
          .subscribe(resolve, reject);
      });
    }

}
