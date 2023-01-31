import { Component } from '@angular/core';
import { LoginsService } from '../services/logins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // declare variables
  username: string;
  password: string;

  // Initializes a new instance of the LoginComponent class
  constructor(private loginsService: LoginsService, private router: Router)  { 
    this.username = '';
    this.password = '';
  }

  // method to login
  login() {
   this.loginsService.getUsers(this.username, this.password);
   
  }


  ngOnInit(): void {
  }
}
