import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {

  constructor(private renderer: Renderer2) { }

  toggleTheme() {
    const body = document.getElementsByTagName('body')[0];
    if(body.classList.contains('dark-mode')){
      this.renderer.removeClass(body, 'dark-mode');
    }else{
      this.renderer.addClass(body, 'dark-mode');
    }
  }
}
