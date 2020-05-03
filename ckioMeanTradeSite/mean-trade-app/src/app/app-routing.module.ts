import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AutomationComponent } from './automation/automation.component';
import { BacktestingComponent } from './backtesting/backtesting.component';
import { OrderComponent } from './order/order.component';
import { PapertradingComponent } from './papertrading/papertrading.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'automation', component: AutomationComponent },
  { path: 'backtesting', component: BacktestingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'order', component: OrderComponent },
  { path: 'papertrading', component: PapertradingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
