import { MenuItem } from 'primeng/primeng';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'fa-home', target: '', routerLink: '/' },
      { label: 'Dados Pessoais', icon: 'fa-smile-o', routerLink: '/dados' },
      { label: 'Comprar Bitcoin', icon: 'fa-plus-square', routerLink: '/compra' },
      { label: 'Vender Bitcoin', icon: 'fa-minus-square', routerLink: '/vender' },
      { label: 'Depósito Bitcoin', icon: 'fa-btc', routerLink: '/depositobtc' },
      { label: 'Depósito Dinheiro', icon: 'fa-money', routerLink: '/depositodin' },
      { label: 'Transferir Bitcoin', icon: 'fa-chain', routerLink: '/transferencia' }

    ];
  }
}
