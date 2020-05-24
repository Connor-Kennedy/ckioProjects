import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  private priceUpdated = new Subject<string>();
  private closePricesUpdated = new Subject<string[]>();
  private labelsUpdated = new Subject<string[]>();


  socket;
  lastPrice = "";
  lastTick = {};
  chartData = null;
  labels = [];
  closePrices = [];

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    this.socket.emit('my message', 'Hello from Angular!');

    this.socket.on('btcusd', (data: string) => {
      //console.log(data);
      this.lastTick = JSON.parse(data);
      this.lastPrice = JSON.parse(data).data.price;
      this.priceUpdated.next(this.lastPrice);
    });

    this.socket.on('chartUpdate', (data: string) => {
      this.chartData = JSON.parse(data);
      this.labels = [];
      this.closePrices = [];

      //unpack JSON to arrays
      Object.keys(this.chartData['Time Series (1min)']).forEach((key, index) => {
        this.labels.unshift(key.toString())
        this.closePrices.unshift(this.chartData['Time Series (1min)'][key]['4. close'])
      })

      this.closePricesUpdated.next(this.closePrices);
      this.labelsUpdated.next(this.labels);


    })
  }

  getPriceUpdateListener(){
    return this.priceUpdated.asObservable();
  }

  getClosePriceUpdateListener(){
    return this.closePricesUpdated.asObservable();
  }

  getLabelsUpdateListener(){
    return this.labelsUpdated.asObservable();
  }
}
