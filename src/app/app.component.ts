import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LoginsService } from './services/logins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme: boolean = false;
  constructor(private renderer: Renderer2, private router: Router, private authService: AuthService) { }

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