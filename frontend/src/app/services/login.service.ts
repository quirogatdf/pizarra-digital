import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtResponse } from '../interface/jwt-response';

import { User } from '../interface/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = '';

  authSubject: BehaviorSubject<any>;
  token!: string | null;
  constructor(
    private _http: HttpClient,
  ) {
    this.baseURL = `${environment.baseURL}/auth/login`
    this.authSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('token') || '{}'));
  }

  login(user: User): Observable<JwtResponse> {
    return this._http.post<JwtResponse>(`${this.baseURL}`, user);
  }

  logout() {
    this.token = "";
    localStorage.removeItem('token');
    localStorage.removeItem('EXPIRES_IN');
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    this.token = token;

  }

  private getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('token')
    }
    return this.token;

  }

  setToken(token: string): void {
    localStorage.setItem('token', `${token}`);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }
}
