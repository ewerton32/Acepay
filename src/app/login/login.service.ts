import { Router } from '@angular/router';
import { UserAcepay } from './../user_acepay/UserAcepay';
/*import { ContaBancaria } from './../conta_bancaria/ContaBancaria';
import { EnderecoAcepay } from './../util_acepay/EnderecoAcepay';
import { ClienteAcepay } from './../user_acepay/ClienteAcepay';
*/
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class LoginService {

  private autenticaUsuario = false;

  mostrarMenuEmitter = new EventEmitter( );

  constructor(private router: Router) { }

  fazerLogin(usuario: UserAcepay) {

    if (usuario.login === '123' && usuario.senha === '123') {
      this.autenticaUsuario = true;
      console.log('foi');
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.autenticaUsuario = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }
}



