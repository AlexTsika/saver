import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
  return !!window.localStorage.getItem('username');
  }

  // remove userdetails from localStorage on logout
  logout () {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('profile');
  }

  constructor() { }
}
