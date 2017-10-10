import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadClienteComponent } from './user_acepay/cad-cliente/cad-cliente.component';
import { DadosPessoaisComponent } from './home/dados-pessoais/dados-pessoais.component';
import { VenderComponent } from './home/vender/vender.component';
import { CompraComponent } from './home/compra/compra.component';
import { DepositodinComponent } from './home/depositodin/depositodin.component';
import { DepositobtcComponent } from './home/depositobtc/depositobtc.component';
import { TransferenciaComponent } from './home/transferencia/transferencia.component';
import { MenuComponent } from './home/menu/menu.component';

import { LoginService } from './login/login.service';

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
    DepositobtcComponent,
    TransferenciaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
