import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PapertradingComponent } from './papertrading/papertrading.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BacktestingComponent } from './backtesting/backtesting.component';
import { AutomationComponent } from './automation/automation.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    PapertradingComponent,
    DashboardComponent,
    BacktestingComponent,
    AutomationComponent,
    AboutComponent,
    NavbarComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
