import { Component } from '@angular/core';
import { LoginsService } from '../services/logins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private loginsService: LoginsService, private router: Router)  { 
    this.username = '';
    this.password = '';
  }

  login() {
   this.loginsService.getUsers(this.username, this.password);
   
  }


  ngOnInit(): void {
  }
}
