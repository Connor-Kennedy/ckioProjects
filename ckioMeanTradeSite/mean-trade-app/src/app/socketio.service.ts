import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  private priceUpdated = new Subject<string>();

  socket;
  lastPrice = "";
  lastTick = {};

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    this.socket.emit('my message', 'Hello from Angular!');

    this.socket.on('btcusd', (data: string) => {
      console.log(data);
      this.lastTick = JSON.parse(data);
      this.lastPrice = JSON.parse(data).data.price;
      this.priceUpdated.next(this.lastPrice);
    });
  }

  getPriceUpdateListener(){
    return this.priceUpdated.asObservable();
  }
}
