import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme: boolean = false;
  constructor(private renderer: Renderer2) { }

  toggleTheme() {
    const body = document.getElementsByTagName('body')[0];
    if(body.classList.contains('dark-mode')){
      this.renderer.removeClass(body, 'dark-mode');
      this.isDarkTheme = false;
    }else{
      this.renderer.addClass(body, 'dark-mode');
      this.isDarkTheme = true;
    }
  }
}
