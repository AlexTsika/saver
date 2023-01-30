import { Component } from '@angular/core';
import { LoginsService } from '../services/logins.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // declare variables
  name: string;
  password: string;
  email: string;

  // initialize RegisterComponent instance
  constructor(private loginsService: LoginsService) {
    this.name = '';
    this.password = '';
    this.email = '';
  }

  // register a user
  register() {
    console.log('name: ' + this.name);
    this.loginsService.register(this.name, this.email, this.password)
    }

  ngOnInit(): void {
  }

}

