import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    const loggedIn = !!window.localStorage.getItem('username');
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      if (loggedIn) {
        logoutBtn.classList.remove('d-none');
      } else {
        logoutBtn.classList.add('d-none');
      }
    }
    return loggedIn;
  }
  
  
  logout() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('profile');
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.classList.add('d-none');
    }
    }

  constructor() { }
}
