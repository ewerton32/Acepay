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
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
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
