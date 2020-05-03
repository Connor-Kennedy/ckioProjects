import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <app-order-exec></app-order-exec>
    <app-basic-chart></app-basic-chart>
  `,
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
