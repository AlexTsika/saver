import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme: boolean = false;
  isUserLoggedIn: boolean;
  
  constructor(private renderer: Renderer2, private router: Router, private authService: AuthService) { 
    this.isUserLoggedIn = this.authService.isLoggedIn();
  }

  toggleTheme() {
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('dark-mode')) {
      this.renderer.removeClass(body, 'dark-mode');
      this.isDarkTheme = false;
    } else {
      this.renderer.addClass(body, 'dark-mode');
      this.isDarkTheme = true;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
