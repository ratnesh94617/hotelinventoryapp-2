import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor() { }

  login(email: string, password: string): boolean {
    if (email === 'admin@gmail.com' && password === 'Admin') {
      // alert('Login successful');
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if(email === 'user@gmail.com' && password === 'User'){
      this.isLoggedIn = true;
      this.isAdmin = false;
    }

    return this.isLoggedIn;
  }
}
