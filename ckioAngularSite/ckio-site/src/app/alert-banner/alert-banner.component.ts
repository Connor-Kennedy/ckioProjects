import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-banner',
  template: `
    <div class="alert alert-danger" role="alert">
      <a href="#" class="alert-link">Under Development!</a>
    </div>
  `,
  styles: [
  ]
})
export class AlertBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
