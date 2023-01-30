import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class LoginsService {
  constructor(private router: Router) {}

  getUsers(username: string, password: string) {
    fetch(`http://localhost:8000/api/users/name/${username}`, {
      headers: {
        Authorization: `Bearer ${environment.bearerToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        bcrypt.compare(password, data.password, (err, res) => {
          if (res) {
            window.localStorage.setItem("username", username);
            window.localStorage.setItem("userId", data.id);
            this.router.navigate(["/input"]);
          } else {
            alert("Wrong password");
          }
        });
      });
  }

  register(name: string, email: string, password: string) {
    fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${environment.bearerToken}`
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then(response => {
        if (response.status === 201) {
          alert("Registration successful");
          this.router.navigate(["/login"]);
        } else {
          alert("Something went wrong");
        }
      });
  }
}
