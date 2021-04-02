import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductResponseModel } from "src/app/models/products.model";
import { UserResponseModel } from "src/app/models/user.model";
import { SessionRepository } from "../domain/repository/SessionRepository";
import { ApiService } from "./net/ApiService";

@Injectable()
export class SessionRepositoryImpl implements SessionRepository {
  private _headers = {};
  private _contenttype = 'content-type';

  constructor(private apiService: ApiService ,private httpClient: HttpClient) { }

  private setHeaders() {
    this._headers[this._contenttype] = 'application/json';
  }

  getProfileDetails( ): Observable<UserResponseModel> {
    this.setHeaders();

    return this.httpClient.get<UserResponseModel>(
      this.apiService._REMOTE_END_POINTS.URL_GET_PROFILE_DATA_USER,
      {
        headers: this._headers,
      }
    );
  }

  getProducts(): Observable<any> {
    this.setHeaders();

    return this.httpClient.get<ProductResponseModel>(
      this.apiService._REMOTE_END_POINTS.URL_GET_HOME_PRODUCTS,
      {
        headers: this._headers,
      }
    );
  }

}