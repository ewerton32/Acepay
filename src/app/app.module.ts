import { LoginService } from './login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadClienteComponent } from './user_acepay/cad-cliente/cad-cliente.component';
import { DadosPessoaisComponent } from './home/dados-pessoais/dados-pessoais.component';
import { VenderComponent } from './home/vender/vender.component';
import { CompraComponent } from './home/compra/compra.component';
import { DepositodinComponent } from './home/depositodin/depositodin.component';
import { DepositobtcComponent } from './home/depositobtc/depositobtc.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadClienteComponent,
    DadosPessoaisComponent,
    VenderComponent,
    CompraComponent,
    DepositodinComponent,
    DepositobtcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
