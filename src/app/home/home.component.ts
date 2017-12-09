import { Component } from '@angular/core';
import { MenuModule, MenuItem, ChartModule } from 'primeng/primeng';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: any;

  options: any;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Valor BTC',
          data: [650, 759, 1560, 2000, 5660, 9085, 8500]
        },
        {
          label: 'Volume de Transações',
          data: [280, 480, 400, 1900, 856, 270, 700]
        }
      ]
    };

    this.options = {
      title: {
        display: true,
        text: 'Variação de preços BTC',
        fontSize: 16
      },
      legend: {
        position: 'bottom'
      }
    };
  }

}
