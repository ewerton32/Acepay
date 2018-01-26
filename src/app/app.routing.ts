import { TransferenciaComponent } from './home/transferencia/transferencia.component';
import { DepositodinComponent } from './home/depositodin/depositodin.component';
import { DepositobtcComponent } from './home/depositobtc/depositobtc.component';
import { DadosPessoaisComponent } from './home/dados-pessoais/dados-pessoais.component';
import { VenderComponent } from './home/vender/vender.component';
import { CompraComponent } from './home/compra/compra.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [

    { path: 'login', component : LoginComponent },
    { path: 'home', component : HomeComponent },
    { path: 'compra', component : CompraComponent },
    { path: 'vender', component : VenderComponent },
    { path: 'dados', component : DadosPessoaisComponent },
    { path: 'depositobtc', component : DepositobtcComponent },
    { path: 'depositodin', component : DepositodinComponent },
    { path: 'transferencia', component : TransferenciaComponent },
    { path: '', component : LoginComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );
