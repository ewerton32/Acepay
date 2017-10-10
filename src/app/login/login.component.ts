
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { UserAcepay } from './../user_acepay/UserAcepay';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  private cliente: UserAcepay = new UserAcepay();

  constructor(private LoginService: LoginService) { }

  ngOnInit() {

  }

  fazerLogin() {
    console.log(this.cliente);
  }

}
