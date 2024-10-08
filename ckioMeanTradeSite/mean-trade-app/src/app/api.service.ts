import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Ticker } from './ticker.model';
import { Subject } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({ providedIn: 'root'})
export class ApiService {

  private tickers: Ticker[] = [];
  private tickersUpdated = new Subject<Ticker[]>();

  constructor(private http: HttpClient){}

  getTickers(){
    this.http.get<{message: string, tickers: Ticker[]}>(environment.API_ENDPOINT + '/api/tickers')
      // must be subscribed to get a response. no need to unsubscribe as angular handles this for http module.
      .subscribe((responseData) => {
        //this function is executed when we get a response
        //update tickers array with server response
        this.tickers = responseData.tickers;
        //inform rest of app about the update
        this.tickersUpdated.next([...this.tickers]);

      });
  }

  getPrice() {
    return this.http.get(environment.API_ENDPOINT + '/api/BTCUSD');
  }

  getTickerUpdateListener(){
    return this.tickersUpdated.asObservable();
  }

}
