import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketioService } from 'src/app/socketio.service';
import { Subscription } from 'rxjs';
import { createChart } from 'lightweight-charts';

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

  private chartClosePricesSub: Subscription;
  private chartLabelsSub: Subscription;


  labels = ["1", "3", "3", "7"];
  closePrices = ["1", "3", "3", "7"];


  ngOnInit(): void {

    this.socketioSub = this.socketioService.getPriceUpdateListener()
      .subscribe((price) => {
        this.lastPrice = price;
      });

    this.chartClosePricesSub = this.socketioService.getClosePriceUpdateListener()
      .subscribe((data) => {
        // this.closePrices = data;
        // console.log(this.closePrices);
        myChart.data.datasets[0].data.pop();
        myChart.data.datasets[0].data = data;
        myChart.update();

      })

    this.chartLabelsSub = this.socketioService.getLabelsUpdateListener()
      .subscribe((data) => {
        // this.labels = data;
        // console.log(this.labels);

        myChart.data.labels.pop();
        myChart.data.labels = data;
        myChart.update();
      })



    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: this.labels,
          datasets: [{
              label: '£££',
              data: this.closePrices,
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false
                  }
              }]
          }
      }
  });
  }

  ngOnDestroy() {
    this.socketioSub.unsubscribe();
    this.chartClosePricesSub.unsubscribe();
    this.chartLabelsSub.unsubscribe();
  }

}
