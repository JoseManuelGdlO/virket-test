import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './net/ApiService';
import { AuthRepository } from '../domain/repository/AuthRepository';

@Injectable()
export class AuthRepositoryImpl implements AuthRepository {
  private _headers = {};
  private _contenttype = 'content-type';

  constructor(private apiService: ApiService ,private httpClient: HttpClient) { }

  private setHeaders() {
    this._headers[this._contenttype] = 'application/json';
  }

  login(
    username: string,
    password: string
  ): Observable<any> {
    const body = {
      username,
      password
    };
    this.setHeaders();

    return this.httpClient.post<any>(
      this.apiService._REMOTE_END_POINTS.URL_GET_ACCOUNT_PARAMS,
      body,
      {
        headers: this._headers,
      }
    );
  }

}
