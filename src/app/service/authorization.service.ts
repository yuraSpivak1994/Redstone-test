import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  private set auth(value: boolean) {
    localStorage.isAuthorized = value;
  }

  public get isAuthorized(): boolean {
    return typeof localStorage.isAuthorized !== 'undefined' ? JSON.parse(localStorage.isAuthorized) : false;
  }

  login() {
    this.auth = true;
  }

  logOut() {
    this.auth = false;
  }
}
