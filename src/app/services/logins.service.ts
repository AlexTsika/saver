import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';
import { environment } from '../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})


export class LoginsService {
  constructor(private router: Router, private toastr: ToastrService) {}

  // get the users from the API, check if the password is valid and redirect to the input component
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
            this.toastr.error("Wrong password", "401" );
          }
        });
      });
  }

  // register new users and redirect them to the login component
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
          this.toastr.success("Registration successful", "201");
          this.router.navigate(["/login"]);
        } else {
          this.toastr.error("Something went wrong", "401");
        }
      });
  }

  // delete users and redirect them to the login component
  deleteUser(userId: string) {
    fetch(`http://localhost:8000/api/users/id/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${environment.bearerToken}`
      }
    })
      .then(response => {
        if (response.status === 200) {
          this.toastr.success("User deleted successfully", "200");
          this.router.navigate(["/login"]);
        } else {
          this.toastr.error("Could not delete user", "401");
        }
      });
  }

  // update password and redirect to the input component
  updatePassword(userId: string, password: string) {
    fetch(`http://localhost:8000/api/users/id/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${environment.bearerToken}`
      },
      body: JSON.stringify({ password })
    })
      .then(response => {
        if (response.status === 200) {
          this.toastr.success("Password updated successfully", "200");
          this.router.navigate(["/input"]);
        } else {
          this.toastr.error("Could not update password", "401");
        }
      });
  }

  refreshPage() {
    location.reload();
  }
  
}
