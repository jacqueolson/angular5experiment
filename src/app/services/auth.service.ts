import { Injectable } from '@angular/core';
import { User } from './../models/user';

@Injectable()
export class AuthService {

  user: User;

  constructor() { }

  public login(user: User) {

  }

  public logout(user: User) {

  }

  public getToken(): string {
    const token = localStorage.getItem(User.name);
    return token;
  }

  public refreshToken() {
    const token = this.user;
  }

  public expireToken() {
    const token = this.user;
  }
}
