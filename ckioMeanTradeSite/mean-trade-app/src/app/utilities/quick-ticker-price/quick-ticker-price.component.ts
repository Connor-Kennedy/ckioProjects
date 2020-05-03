import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Subscription } from 'rxjs';
import { Ticker } from 'src/app/ticker.model'

@Component({
  selector: 'app-quick-ticker-price',
  template: `
    <div class="dropdown">
      <div class="container-fluid">
        <button class="btn btn-dark dropdown-toggle" type="button" style="white-space:normal;" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ticker}} <span class="badge badge-light">{{price}}</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" *ngFor="let ticker of tickers" (click)="changeTicker(ticker.ticker, ticker.lastPrice)">{{ticker.ticker}}</a>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class QuickTickerPriceComponent implements OnInit, OnDestroy {

  price = "";
  ticker = "BTCUSD";

  tickers: Ticker[] = [];
  private tickerSub: Subscription;

  changeTicker(ticker, price){
    this.ticker = ticker;
    this.price = price;

  }

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTickers();
    this.tickerSub = this.apiService.getTickerUpdateListener()
    .subscribe((tickers: Ticker[]) => {
      this.tickers = tickers;
    });
  }

  ngOnDestroy() {
    this.tickerSub.unsubscribe();
  }

}


