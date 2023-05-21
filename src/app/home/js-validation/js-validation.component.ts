import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-validation',
  templateUrl: './js-validation.component.html',
  styleUrls: ['./js-validation.component.scss']
})
export class JsValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //   validation() {
  //     let username = document.getElementById("user").value;
  //     let password = document.getElementById("pass").value;

  //     if (!username) {
  //       document.getElementById("username").innerHTML = "** Please fill the username field"; return false;
  //     }
  //     if (username.length <= 2 || username.length > 20) {
  //       document.getElementById("username").innerHTML = "** Username length must be between 2 and 20"; return false;
  //     }
  //     if (!isNaN(username)) {
  //       document.getElementById("username").innerHTML = "** only characters are allowed"; return false;
  //     }
  //     if (password == "") {
  //       document.getElementById("passwords").innerHTML =
  //         " ** Please fill the password field";
  //     return false;
  //   }
  //   if (password.length <= 5 || password.length > 20) {
  //     document.getElementById("passwords").innerHTML =
  //       " ** Passwords lenght must be between  5 and 20";
  //     return false;
  //   }
  // }

}
