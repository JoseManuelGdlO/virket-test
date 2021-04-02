import { Inject, Injectable } from "@angular/core";
import { UserResponseModel } from "src/app/models/user.model";
import { SessionRepository, SESSION_REPOSITORY } from "../../repository/SessionRepository";

@Injectable()
export class ProfileUseCase {
    constructor(
      @Inject(SESSION_REPOSITORY) private sessionRepository: SessionRepository
    ) { }

    getDetailProfile(): Promise<UserResponseModel> {
        return new Promise((resolve, reject) => {
        this.sessionRepository
          .getProfileDetails()
          .subscribe(resolve, reject);
      });
    }

}