import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketioService } from 'src/app/socketio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-chart',
  template: `
    <mat-card>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{selectedTimeFrame[0]}}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item"  *ngFor="let timeFrame of timeFrames" (click)="changeSelectedTimeFrame(timeFrame)">{{timeFrame[1]}}</a>
      </div>
    </div>

      <div><canvas id="myChart" style="height:400px width:400px display:block"></canvas></div>
    </mat-card>

  `,
  styles: [
  ]
})
export class BasicChartComponent implements OnInit, OnDestroy {

  constructor(public socketioService: SocketioService) { }

  timeFrames = [
    ["72H","72 Hours"],
    ["24H","24 Hours"],
    ["12H","12 Hours"],
    ["6H","6 Hours"],
    ["4H","4 Hours"],
    ["2H","2 Hours"],
    ["1H","1 Hours"],
    ["30M","30 Minutes"],
    ["15M","15 Minutes"],
    ["5M","5 Minutes"],
    ["3M","3 Minutes"],
    ["1M","1 Minute"] ];

  selectedTimeFrame = this.timeFrames[1];

  changeSelectedTimeFrame(newTimeFrame){
    this.selectedTimeFrame = newTimeFrame;
  }


  private socketioSub: Subscription;
  lastPrice;

  ngOnInit(): void {

    this.socketioSub = this.socketioService.getPriceUpdateListener()
      .subscribe((price) => {
        this.lastPrice = price;
      });

    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [9900, 9200, 6400, 7600, 8500, 9000],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

  ngOnDestroy() {
    this.socketioSub.unsubscribe();
  }

}
