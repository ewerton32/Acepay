import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/primeng.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
cliente: any;
login: any;
senha: any;
  constructor(private loginService: LoginService) {
    this.login = this.loginService.getLogin;
  }
  onclick() {
    console.log(this.login);
  }

}
