import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PapertradingComponent } from './papertrading/papertrading.component';
import { BacktestingComponent } from './backtesting/backtesting.component';
import { AutomationComponent } from './automation/automation.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { QuickTickerPriceComponent } from './utilities/quick-ticker-price/quick-ticker-price.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderExecComponent } from './utilities/order-exec/order-exec.component';
import { BasicChartComponent } from './utilities/basic-chart/basic-chart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountBannerComponent } from './utilities/account-banner/account-banner.component';
import { HttpClientModule } from '@angular/common/http';
import { SocketioService } from './socketio.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    PapertradingComponent,
    BacktestingComponent,
    AutomationComponent,
    AboutComponent,
    NavbarComponent,
    BannerComponent,
    QuickTickerPriceComponent,
    OrderExecComponent,
    BasicChartComponent,
    DashboardComponent,
    AccountBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
