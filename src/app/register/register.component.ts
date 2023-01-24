import { Component } from '@angular/core';
import { LoginsService } from '../services/logins.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name: string;
  password: string;
  email: string;

  constructor(private loginsService: LoginsService) {
    this.name = '';
    this.password = '';
    this.email = '';
  }

  register() {
    console.log('name: ' + this.name);
    this.loginsService.register(this.name, this.email, this.password)
    }

  ngOnInit(): void {
  }

}
