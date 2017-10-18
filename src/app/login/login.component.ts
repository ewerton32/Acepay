import { EnderecoAcepay } from './../util_acepay/EnderecoAcepay';
import { ContaBancaria } from './../conta_bancaria/ContaBancaria';
import { ClienteAcepay } from './../user_acepay/ClienteAcepay';

import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { UserAcepay } from './../user_acepay/UserAcepay';
import { InputTextModule } from 'primeng/primeng';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  private cliente: UserAcepay = new UserAcepay('', '');

  constructor(private LoginService: LoginService) { }

  ngOnInit() {

  }

  fazerLogin() {
    // if (this.cliente.login === '123' && this.cliente.senha === '123') {
    // console.log(this.cliente);
    // }
    this.LoginService.fazerLogin(this.cliente);
  }

}
