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
      { label: 'Dados Pessoais', icon: 'fa-plus', target: '', routerLink: '/dados' },
      { label: 'Comprar Bitcoin', icon: 'fa-download', routerLink: '/compra' },
      { label: 'Vender Bitcoin', icon: 'fa-download', routerLink: '/vender' },
      { label: 'Depósito Bitcoin', icon: 'fa-refresh', routerLink: '/depositobtc' },
      { label: 'Depósito Dinheiro', icon: 'fa-refresh', routerLink: '/depositodin' },
      { label: 'Transferir Bitcoin', icon: 'fa-refresh', routerLink: '/transferencia' }

    ];
  }
}
