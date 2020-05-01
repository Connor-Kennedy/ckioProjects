import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <a class="navbar-brand" href="#"><img src="assets/img/ckio logo.png" height=50px/> Trade App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" routerLink="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/dashboard">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/order">Execute Order</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/papertrading">Paper Trade</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/backtesting">Backtest Lab</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/automation">Automation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
